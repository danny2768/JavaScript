import { LogEntity } from '../../entities/log.entity';
import { CheckServiceMultiple } from './check-service-multiple';

describe('Check-service-multiple.test.ts', () => {

    const mockLogRepository1 = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    };
    const mockLogRepository2 = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    };
    const mockLogRepository3 = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    };

    const successCallback = jest.fn();
    const errorCallback = jest.fn();    
    
    const checkService = new CheckServiceMultiple(
        [mockLogRepository1, mockLogRepository2, mockLogRepository3],
        successCallback,
        errorCallback
    );

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Should call success callback when fetch returns true', async() => {
        
        const wasSuccessful = await checkService.execute('https://www.google.com')

        expect(wasSuccessful).toBeTruthy();

        expect(successCallback).toHaveBeenCalled();
        expect(errorCallback).not.toHaveBeenCalled();

        expect(mockLogRepository1.saveLog).toHaveBeenCalledWith( expect.any( LogEntity ) );
        expect(mockLogRepository2.saveLog).toHaveBeenCalledWith( expect.any( LogEntity ) );
        expect(mockLogRepository3.saveLog).toHaveBeenCalledWith( expect.any( LogEntity ) );
    });

    test('Should call error callback when fetch returns false', async () => {

        const wasSuccessful = await checkService.execute('https://www.djkashjfhajl,dhfjahs.com')

        expect(wasSuccessful).toBeFalsy();

        expect(successCallback).not.toHaveBeenCalled();
        expect(errorCallback).toHaveBeenCalled();

        expect(mockLogRepository1.saveLog).toHaveBeenCalledWith( expect.any( LogEntity ) );
        expect(mockLogRepository2.saveLog).toHaveBeenCalledWith( expect.any( LogEntity ) );
        expect(mockLogRepository3.saveLog).toHaveBeenCalledWith( expect.any( LogEntity ) );
    });


})