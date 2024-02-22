
export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export interface LogEntytyOptions {
    message: string;
    severityLevel: LogSeverityLevel;
    origin: string;
    createdAt?: Date;
}

export class LogEntity {

    public severityLevel: LogSeverityLevel;
    public message: string;
    public origin: string;
    public createdAt: Date;
    
    constructor( options: LogEntytyOptions ){
        this.message = options.message;
        this.severityLevel = options.severityLevel;
        this.origin = options.origin;
        this.createdAt = new Date();
    }

    static fromJson = ( json: string ): LogEntity => {
        const { message, severityLevel, createdAt, origin } = JSON.parse(json);

        if ( !message ) throw new Error('Message is required');
        if ( !severityLevel ) throw new Error('Severity level is required');
        if ( !createdAt ) throw new Error('Created at is required');
        if ( !origin ) throw new Error('Origin is required');

        const log = new LogEntity( {message, severityLevel, origin, createdAt} );         

        return log; 
    }

}
