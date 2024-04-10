import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron.service";

import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs';
import { EmailService } from './email/email.service';
import { LogRepository } from '../domain/repository/log.repository';

const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);

const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource()
);
const postgresLogRepository = new LogRepositoryImpl(
    new PostgresDatasource()
);

// const emailService = new EmailService(LogRepository);


export class Server {
    
    public static start() {
        console.log('Server started...');

        // # Send logs email - UseCase
        // ! El caso de uso contiene un error. 
        // ! Si ocurre un fallo al enviar el email retorna falso
        // ! Pero no da informacion sobre el error ocurrido.
        // new SendEmailLogs(
        //     fileSystemLogRepository,
        //     emailService,
        // ).execute('daniel.eduardo.cobos@hotmail.com')
        
        // # Send emails - nodeMailer
        // const emailService = new EmailService(fileSystemLogRepository);
        // emailService.sendEmailWithFileSystemLogs([
        //     'daniel.eduardo.cobos@hotmail.com',
        //     'cobos2768@gmail.com',
        // ])

        // # Create logs
        // CronService.createJob(
        //     '*/15 * * * * *',
        //     () => {
        //         // const url = 'http://localhost:3000'
        //         const url = 'https://google.com'
        //         new CheckServiceMultiple(
        //             [ fsLogRepository, mongoLogRepository, postgresLogRepository, ],
        //             () => console.log(`${ url } is ok`),
        //             ( error ) => console.log( error ),
                    
        //         ).execute(url)
        //     }
        // );
    }
}
