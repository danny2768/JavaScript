import { EmailService } from '../../../presentation/email/email.service';
import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';

interface SendEmailLogsUseCase {
    execute( to: string | string[] ): Promise<boolean>;
}

export class SendEmailLogs implements SendEmailLogsUseCase {

    private readonly origin = 'send-email-logs.ts';
    
    constructor(
        private readonly logRepository: LogRepository,
        private readonly emailService: EmailService,
    ){}

     async execute( to: string | string[] ): Promise<boolean> {
        
        try {
            const sent = await this.emailService.sendEmailWithFileSystemLogs(to);
            if ( !sent ) {
                throw new Error('Email log not sent ');                
            }

            const log = new LogEntity({
                message: `Email sent succesfully to ${to}`, 
                severityLevel: LogSeverityLevel.low,
                origin: this.origin,
            });
            
            this.logRepository.saveLog( log );

            return true;
        } catch (error) {
            

            const log = new LogEntity({
                message: `${error}`, 
                severityLevel: LogSeverityLevel.high,
                origin: this.origin,
            });
            
            this.logRepository.saveLog( log );

            return false;
        }



        return true;
    }
}