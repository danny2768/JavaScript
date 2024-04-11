import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';


interface CheckServiceUsecase {
    execute( url: string ): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = ( error: string ) => void;


export class CheckService implements CheckServiceUsecase{

    private readonly origin = 'check-service.ts';

    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback,
    ){}

    public async execute( url: string ): Promise<boolean> {

        try {
            const req = await fetch(url);
            if (!req.ok ) {
                throw new Error(`Error on check service ${ url }`);                
            }

            const log = new LogEntity({
                message: `Service ${url} working`, 
                severityLevel: LogSeverityLevel.low,
                origin: this.origin,
            })
            this.logRepository.saveLog( log )
            this.successCallback();

            return true
        } catch (error) {
            const errorMessage = `${url} is not ok -> ${error}`;

            const log = new LogEntity({
                message: errorMessage, 
                severityLevel: LogSeverityLevel.high,
                origin: this.origin,
            })
            this.logRepository.saveLog( log )

            this.errorCallback( errorMessage );

            return false;
        }
    }
}
