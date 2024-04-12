import { LogModel, MongoDatabase } from '../../data/mongo';
import { MongoLogDatasource } from './mongo-log.datasource';
import { envs } from '../../config/plugins/envs.plugin';
import mongoose from 'mongoose';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

describe('mongo-log.datasource.test.ts', () => {

    const mongoLogDatasource = new MongoLogDatasource();
    const log = new LogEntity({
        message: 'Test message',
        origin: 'mongo-log.datasource.test.ts',
        severityLevel: LogSeverityLevel.medium
    })

    beforeAll(async () => {
        await MongoDatabase.connect({
            dbName: envs.MONGO_DB_NAME,
            mongoUrl: envs.MONGO_URL
        })
    });

    afterEach(async () => {
        await LogModel.deleteMany();
        jest.clearAllMocks();
    })

    afterAll(async () => {        
        mongoose.connection.close();
    })    

    test('saveLog should create a new log', async () => {

        const logSpy = jest.spyOn(console, 'log');        

        await mongoLogDatasource.saveLog( log );

        expect( logSpy ).toHaveBeenCalled();
        expect( logSpy ).toHaveBeenCalledWith( "Mongo log created:", expect.any(String) );

    });

    test('getLogs should return logs by severity level', async () => {

        await mongoLogDatasource.saveLog( log );
        
        const logs = await mongoLogDatasource.getLogs( LogSeverityLevel.medium );                        

        expect( logs.length ).toBe(1);
        expect( logs[0].severityLevel ).toBe( LogSeverityLevel.medium );
    });

});