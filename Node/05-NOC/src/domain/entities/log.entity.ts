
export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export class LogEntity {

    public severityLevel: LogSeverityLevel;
    public message: string;
    public createdAt: Date;
    
    constructor( message: string, level: LogSeverityLevel){
        this.message = message;
        this.severityLevel = level;
        this.createdAt = new Date();
    }

    static fromJson = ( json: string ): LogEntity => {
        const { message, severityLevel, createdAt } = JSON.parse(json);

        if ( !message ) throw new Error('Message is required');
        if ( !severityLevel ) throw new Error('Severity level is required');
        if ( !createdAt ) throw new Error('Created at is required');

        const log = new LogEntity(message, severityLevel); 
        log.createdAt = new Date(createdAt);

        return log; 
    }

}
