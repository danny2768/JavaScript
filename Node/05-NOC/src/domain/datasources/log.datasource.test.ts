import { LogEntity, LogSeverityLevel } from '../entities/log.entity';
import { LogDatasource } from './log.datasource';

describe('log.datasource.ts LogDatasource', () => {

    class MockLogDatasource implements LogDatasource {

        async saveLog(log: LogEntity): Promise<void> {
            return;
        }
        async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
            return [newLog];
        }

    }

    const newLog = new LogEntity({
        origin: 'Log.datasource.test.ts',
        message: 'Test message',
        severityLevel: LogSeverityLevel.low
    })
    
    test('Should test the abstract class', async () => {

        const mockLogDatasource = new MockLogDatasource();

        expect( mockLogDatasource ).toBeInstanceOf(MockLogDatasource);
        expect( typeof mockLogDatasource.saveLog ).toBe( 'function' );
        expect( typeof mockLogDatasource.getLogs ).toBe( 'function' );

        await mockLogDatasource.saveLog(newLog);
        const logs = await mockLogDatasource.getLogs(LogSeverityLevel.low);

        expect( logs ).toHaveLength(1);
        expect( logs[0] ).toBeInstanceOf( LogEntity );
    })
})