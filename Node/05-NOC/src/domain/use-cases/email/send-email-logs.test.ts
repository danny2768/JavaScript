import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { SendEmailLogs } from './send-email-logs';

describe('sent-email-logs.test.ts', () => {

    const mockLogRepository = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    };

    const mockEmailService = {
        sendEmail: jest.fn(),
        sendEmailWithFileSystemLogs: jest.fn(),
    }

    const sendEmailLogs = new SendEmailLogs(
        mockLogRepository,
        mockEmailService as any,
    );

    const mockEmail = 'sony@sony.com';

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Should call saveEmail and saveLog ', async () => {

        mockEmailService.sendEmailWithFileSystemLogs.mockReturnValue(true);

        const wasSuccessful = await sendEmailLogs.execute(mockEmail)

        expect(wasSuccessful).toBeTruthy();

        expect(mockEmailService.sendEmailWithFileSystemLogs).toHaveBeenCalledTimes(1);
        expect(mockEmailService.sendEmailWithFileSystemLogs).toHaveBeenCalledWith(mockEmail);

        expect(mockLogRepository.saveLog).toHaveBeenCalledWith( expect.any( LogEntity ))
        expect(mockLogRepository.saveLog).toHaveBeenCalledWith( expect.objectContaining({
            message: `Email sent succesfully to ${mockEmail}`, 
            severityLevel: 'low',
            origin: 'send-email-logs.ts',
        }))
    });

    test('Should log in case of error ', async () => {
        
        mockEmailService.sendEmailWithFileSystemLogs.mockReturnValue(false);

        const wasSuccessful = await sendEmailLogs.execute(mockEmail)

        expect(wasSuccessful).toBeFalsy();

        expect(mockEmailService.sendEmailWithFileSystemLogs).toHaveBeenCalledTimes(1);
        expect(mockEmailService.sendEmailWithFileSystemLogs).toHaveBeenCalledWith(mockEmail);

        expect(mockLogRepository.saveLog).toHaveBeenCalledWith( expect.any( LogEntity ))
        expect(mockLogRepository.saveLog).toHaveBeenCalledWith( expect.objectContaining({
             message: "Error: Email log not sent ", 
             origin: "send-email-logs.ts", 
             severityLevel: "high"
        }))
    });

})