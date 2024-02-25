import fs from 'fs'
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class FileSystemDatasource implements LogDatasource {

    private readonly logsPaths = {
        rootPath: 'logs/',
        allLogsPath: 'logs/logs-all.log',
        mediumLogsPath: 'logs/logs-medium.log',
        highLogsPath: 'logs/logs-high.log',
    }

    constructor() {
        this.createLogsFiles();
    }

    private createLogsFiles = () => {
        if (!fs.existsSync(this.logsPaths.rootPath)) {
            fs.mkdirSync(this.logsPaths.rootPath);
        }

        const paths = [
            this.logsPaths.allLogsPath,
            this.logsPaths.mediumLogsPath,
            this.logsPaths.highLogsPath
        ];
        
        paths.forEach( path => {
            if ( fs.existsSync( path ) ) return;
            
            fs.writeFileSync( path, '' ); // create empty file if it doesn't exist 
        })
    }

    async saveLog( newLog: LogEntity ): Promise<void> {
        const logAsJson = `${ JSON.stringify(newLog)}\n`;
        
        fs.appendFileSync(this.logsPaths.allLogsPath, logAsJson);

        if ( newLog.severityLevel === LogSeverityLevel.low ) return;

        if ( newLog.severityLevel === LogSeverityLevel.medium ) {
            fs.appendFileSync(this.logsPaths.mediumLogsPath, logAsJson);
        }
        
        if ( newLog.severityLevel === LogSeverityLevel.high ) {
            fs.appendFileSync(this.logsPaths.highLogsPath, logAsJson);
        }        
    }

    private getLogsFromFile = ( path: string ): LogEntity[] => {
        const content = fs.readFileSync( path, 'utf-8');
        if ( content === '' ) return [];
        const logs = content.split('\n')
            .map( log =>  LogEntity.fromJson(log))
        
        return logs;
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        
        switch(severityLevel){
            case LogSeverityLevel.low: {
                return this.getLogsFromFile( this.logsPaths.allLogsPath)
            }

            case LogSeverityLevel.medium: {
                return this.getLogsFromFile( this.logsPaths.mediumLogsPath)
            }

            case LogSeverityLevel.high: {
                return this.getLogsFromFile( this.logsPaths.highLogsPath)
            }

            default: {
                throw new Error(`${ severityLevel } not implemented.`);
            }
        }        
    }

}