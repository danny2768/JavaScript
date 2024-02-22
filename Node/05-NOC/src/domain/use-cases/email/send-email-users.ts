import { SendMailOpitons, EmailService } from '../../../presentation/email/email.service';
import { LogRepository } from '../../repository/log.repository';


interface SendEmailsUsersUseCase {
    execute: ( options: SendMailOpitons ) => Promise<boolean>;
}

export class SendEmailUser implements SendEmailsUsersUseCase {
    
    private readonly origin = 'send-email-users.ts';

    constructor(
        private readonly emailService: EmailService,
        private readonly logRepository: LogRepository
    ) {}
    
    async execute( options: SendMailOpitons ): Promise<boolean> {
        
        try {
            const sent = await this.emailService.sendEmail(options);
            if ( !sent ) {
                throw new Error('Email log not sent ');
            }
        } catch (error) {
            
        }
        
        return true;
    }

    private saveLog() {

    }
}