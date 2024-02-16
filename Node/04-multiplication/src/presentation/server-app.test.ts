import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import { ServerApp } from './server-app';
import fs from 'fs';

describe('Server App', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    afterEach(() => {        
        const testPathFolderExists = fs.existsSync('test-path');
        if (testPathFolderExists) fs.rmSync('test-path', { recursive: true});        
    })

    const options = {
        base            : 4,
        limit           : 10,
        showTable       : true,
        fileName        : "test-name",
        fileDestination : "test-path",
    }

    test('Should create ServerApp instance', () => {
        
        const serverApp = new ServerApp();
        
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect( typeof ServerApp.run ).toBe('function');
    });

    // test('Should run server app with default options', () => {
        
    //     const logSpy = jest.spyOn(console, 'log');
    //     const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute');
    //     const saveFileSpy = jest.spyOn( SaveFile.prototype, 'execute');

    //     ServerApp.run(options);

    //     expect(logSpy).toHaveBeenCalledTimes(3);
    //     expect(logSpy).toHaveBeenCalledWith('Server running...');
    //     expect(logSpy).toHaveBeenCalledWith('Table saved!');
        
    //     expect(createTableSpy).toHaveBeenCalledTimes(1);
    //     expect(createTableSpy).toHaveBeenCalledWith({
    //         base: options.base, limit: options.limit,
    //     });

    //     expect(saveFileSpy).toHaveBeenCalledTimes(1);
    //     expect(saveFileSpy).toHaveBeenCalledWith({
    //         fileContent: expect.any(String),
    //         fileName: options.fileName,
    //         fileDestination: options.fileDestination,
    //     });

    //     logSpy.mockRestore();
    //     createTableSpy.mockRestore();
    //     saveFileSpy.mockRestore();
    // });

    test('Should run ServerApp with custom mocked values', () => {
        
        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('test-fileContent');
        const saveFileMock = jest.fn().mockReturnValue(true);

        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock; 
        
        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith('Server running...');
        expect(createMock).toHaveBeenCalledWith({"base": options.base, "limit": options.limit});
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: "test-fileContent",
            fileDestination: options.fileDestination,
            fileName: options.fileName,
        });
        expect(logMock).toHaveBeenCalledWith('Table saved!');
        expect(logErrorMock).not.toHaveBeenCalled();

    });

});