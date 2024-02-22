import nodemailer from 'nodemailer'
import { envs } from '../../plugins/envs.plugin'

import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
import { LogRepository } from '../../domain/repository/log.repository';

import { Attachment } from 'nodemailer/lib/mailer';

// We can create our own inferface for the attachements but I'll use
// the one already defined by nodemailer.
// interface Attachment {
//     filename: string;
//     content: string;
// }

export interface SendMailOpitons {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachment[]
}


export class EmailService {
    
    private readonly origin = 'email.service.ts';

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        }       
    });

    constructor(
        private readonly logRepository: LogRepository,
    ){}

    async sendEmail( options: SendMailOpitons ): Promise<boolean> {

        const { to, subject, htmlBody, attachments = [] } = options;

        try {

            const sendInformation = await this.transporter.sendMail({
                to,
                subject,
                html: htmlBody,
                attachments,
            })

            const log = new LogEntity({
                message: `Email sent succesfully to ${to}`, 
                severityLevel: LogSeverityLevel.low,
                origin: this.origin,
            })

            // console.log(sendInformation);

            this.logRepository.saveLog( log )

            return true;
        } catch (error) {
            
            // console.log(error);

            const errorMessage = `An error occurred while trying to send an email --> ${error}`;

            const log = new LogEntity({
                message: errorMessage, 
                severityLevel: LogSeverityLevel.medium,
                origin: this.origin,
            });
            
            this.logRepository.saveLog( log );
            return false; 
        }        
    }

    async sendEmailWithFileSystemLogs( to: string | string[] ): Promise<boolean> {
        
        const subject = 'Logs from system Udemy/Node/05-NOC'
        const htmlBody = `
        <h3> Logs from the NOC system</h3>
        <p>Hi, this is an email from NOC system by Daniel Cobos.</p>
        <p>In the attachments you'll find the logs from the system.</p>
        <p>Thanks for choosing us!</p>        
        `;

        const attachments: Attachment[] = [
            { filename: 'logs-all.log', path: './logs/logs-all.log' },
            { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
            { filename: 'logs-high.log', path: './logs/logs-high.log' },            
        ];

        return this.sendEmail({ to, subject, htmlBody, attachments })
                
    }
}