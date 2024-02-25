import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { PrismaClient, SeverityLevel } from '@prisma/client';

const prismaClient = new PrismaClient();

const severityEnum = {
    low: SeverityLevel.LOW,
    medium: SeverityLevel.MEDIUM,
    high: SeverityLevel.HIGH,
}


export class PostgresDatasource implements LogDatasource {
    
    async saveLog(log: LogEntity): Promise<void> {        
        
        const level = severityEnum[log.severityLevel];
        
        const newLog = await prismaClient.logModel.create({
            data: {
                message: log.message,
                level: level,
                origin: log.origin,
            }
        });
        console.log('Postgres log created:', newLog.id );
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        
        const level = severityEnum[severityLevel];
        
        const logs = await prismaClient.logModel.findMany({
            where: {
                level: level 
            }
        })
        return logs.map( postgresLog => LogEntity.fromObject(postgresLog))
    }    

}