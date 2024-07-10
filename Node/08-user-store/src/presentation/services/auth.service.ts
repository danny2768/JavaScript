import { bcryptAdapter, envs, JwtAdapter } from "../../config";
import { UserModel } from "../../data";
import { CustomError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain";
import { EmailService } from './email.service';

export class AuthService {

    constructor(
        private readonly emailService: EmailService,
    ) {}

    private async generateToken( payload: { [key: string]: any }, durationTime?: string ){
        const token = await JwtAdapter.generateToken( payload, durationTime );
        if ( !token ) throw CustomError.internalServer('Error generating token');

        return token;
    }

    private async sendEmailValidationLink( email: string ) {
        const token = await this.generateToken( { email } );        

        const link = `${envs.WEBSERVICE_URL}/auth/validate-email/${ token }`;
        const html = `
            <h1>Validate your email</h1>
            <p>Click on the link below to validate your email</p>
            <a href="${ link }">Click here to validate your email: ${ email }</a>
        `    
        const wasSent = await this.emailService.sendEmail({ 
            to: email, 
            subject: 'Validation Email', 
            htmlBody: html
        });

        if (!wasSent) throw CustomError.internalServer('Error sending validation email');
        return true;
    }

    public async registerUser( registerUserDto: RegisterUserDto) {
        
        const existsUser = await UserModel.findOne({ email: registerUserDto.email });
        if (existsUser) throw CustomError.badRequest('Email already exists');

        try {
            const user = new UserModel(registerUserDto);                                    
            user.password = bcryptAdapter.hash( registerUserDto.password )            
            await user.save();            

            // Email de validacion
            await this.sendEmailValidationLink( user.email )

            const { password, ...userEntity } = UserEntity.fromObj( user );
            
            const token = await this.generateToken( { id: user.id }, '10m' );

            return {
                user: {...userEntity},
                token
            };
        } catch (error) {
            throw CustomError.internalServer(`${error}`);
        }        
    };

    public async logingUser( loginUserDto: LoginUserDto ) {
        
        const user = await UserModel.findOne({ email: loginUserDto.email });
        if (!user) throw CustomError.badRequest('Incorrect email');

        const isMatch: boolean = bcryptAdapter.compare( loginUserDto.password, user.password );
        if (!isMatch) throw CustomError.badRequest('Incorrect password');

        const { password, ...userEntity } = UserEntity.fromObj( user );

        const token = await this.generateToken( { id: user.id } );

        return {
            user: userEntity,
            token
        };
    }

    public async validateEmail( token: string ) {
        const payload =  await JwtAdapter.verifyToken( token );
        if ( !payload ) throw CustomError.unauthorized('Invalid token');

        const { email } = payload as { email: string };
        if ( !email ) throw CustomError.internalServer('Email not in token');

        const user = await UserModel.findOne({ email });
        if ( !user ) throw CustomError.internalServer('User not found');

        user.emailValidated = true;
        await user.save();

        return true;
    }

}