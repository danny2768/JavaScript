import exp from 'constants';
import { CheckService } from './check-service';
import { LogEntity } from '../../entities/log.entity';
describe('Check service use case', () => {

    const mockLogRepository = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    }

    const successCallback = jest.fn();
    const errorCallback = jest.fn();    
    
    const checkService = new CheckService(
        mockLogRepository,
        successCallback,
        errorCallback
    );

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Should call success callback when fetch returns true', async () => {

        const wasSuccessful = await checkService.execute('https://www.google.com')

        expect(wasSuccessful).toBeTruthy();

        expect(successCallback).toHaveBeenCalled();
        expect(errorCallback).not.toHaveBeenCalled();

        expect(mockLogRepository.saveLog).toHaveBeenCalledWith(
            expect.any( LogEntity )
        );
    });

    test('Should call error callback when fetch returns false', async () => {

        const wasSuccessful = await checkService.execute('https://www.djkashjfhajl,dhfjahs.com')

        expect(wasSuccessful).toBeFalsy();

        expect(successCallback).not.toHaveBeenCalled();
        expect(errorCallback).toHaveBeenCalled();

        expect(mockLogRepository.saveLog).toHaveBeenCalledWith(
            expect.any( LogEntity )
        );
    });

})