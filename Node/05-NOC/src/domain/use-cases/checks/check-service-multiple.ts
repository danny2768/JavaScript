import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';


interface CheckServiceMultipleUsecase {
    execute( url: string ): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = ( error: string ) => void;


export class CheckServiceMultiple implements CheckServiceMultipleUsecase{

    private readonly origin = 'check-service.ts';

    constructor(
        private readonly logRepository: LogRepository[],
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback,
    ){}

    private saveLogsInRepos( log: LogEntity ) {
        this.logRepository.forEach( repository => repository.saveLog( log ) )
    }

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
            this.saveLogsInRepos( log )
            this.successCallback();

            return true
        } catch (error) {
            const errorMessage = `${url} is not ok -> ${error}`;

            const log = new LogEntity({
                message: errorMessage, 
                severityLevel: LogSeverityLevel.high,
                origin: this.origin,
            })
            this.saveLogsInRepos( log )

            this.errorCallback( errorMessage );

            return false;
        }
    }
}
