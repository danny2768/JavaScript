import { buildLogger, logger as winstonLogger, logger } from '../../src/plugins/logger.plugin';
import winston from 'winston';

describe('plugins/logger.plugin', () => {

    
    test('buildLogget should return a function', () => {    
        const logger = buildLogger('test');
        
        expect( typeof logger.log ).toBe('function');
        expect( typeof logger.error ).toBe('function');
    });

    test('logger.log should log a message', () => {
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);
        logger.log(message);

        expect(winstonLoggerMock).toHaveBeenCalled();
        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({"message": "test message", "service": "test service"})
        )
        

    });
});