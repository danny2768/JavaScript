import { Options, SaveFile } from './save-file.use-case';
import fs from 'fs';

describe('SaveFileUseCase', () => {

    beforeEach(() => {
        jest.clearAllMocks(); // Funciona solo para funciones jest
    })

    afterEach(() => {
        const outputsFolderExists = fs.existsSync('outputs');
        if (outputsFolderExists) fs.rmSync('outputs', { recursive: true});

        const customOutputsFolderExists = fs.existsSync('custom-outputs');
        if (customOutputsFolderExists) fs.rmSync('custom-outputs', { recursive: true});
    })

    test('Should save file with default values', () => {
        
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options: Options = {
            fileContent: 'Test file exaxmple'
        };
        const result = saveFile.execute(options);
        
        const fileExists = fs.existsSync( filePath )
        const fileContent = fs.readFileSync( filePath, { encoding: 'utf-8'} );
        
        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe( options.fileContent );
    });

    test('Should save file with custom values', () => {
        const options: Options = {
            fileContent: 'This is a test file.',
            fileDestination: 'custom-outputs',
            fileName: 'custom-table-name',
        };
        const filePath = `${options.fileDestination}/${options.fileName}.txt`;

        const saveFile = new SaveFile();
        const result = saveFile.execute(options);

        const fileExists = fs.existsSync( filePath )
        const fileContent = fs.readFileSync( filePath, { encoding: 'utf-8'} );

        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe( options.fileContent );        
    });

    test('Should return false if directory could not be created', () => {

        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('Error creating directory') }
        );

        const options: Options = {
            fileContent: 'This is a test file.',
            fileDestination: 'custom-outputs',
            fileName: 'custom-table-name',
        };

        const saveFile = new SaveFile();
        const result = saveFile.execute(options);

        expect(result).toBe(false);        

        mkdirSpy.mockRestore();
    });

    test('Should return false if file could not be written', () => {

        const writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => { throw new Error('Error writing file') }
        );

        const options: Options = {
            fileContent: 'This is a test file.',
            fileDestination: 'custom-outputs',
            fileName: 'custom-table-name',
        };

        const saveFile = new SaveFile();
        const result = saveFile.execute(options);

        expect(result).toBe(false);        

        writeFileSyncSpy.mockRestore();
    });
})