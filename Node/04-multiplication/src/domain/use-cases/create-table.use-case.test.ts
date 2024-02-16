import { CreateTable } from './create-table.use-case';

describe('CreateTableUseCase', () => {

    test('Should create table with default values', () => {

        const createTable = new CreateTable();        
        const table = createTable.execute({ base: 2 });
        const rows = table.split('\n').length;
            
        expect(createTable).toBeInstanceOf( CreateTable );
        expect(rows).toBe(10);
    });

    test('Should create table with custom values', () => {
        
        const createTable = new CreateTable();        
        const options = { 
            base: 3, 
            limit: 15 
        }
        const table = createTable.execute( options );
        const rows = table.split('\n').length;
        
        expect(table).toContain(`${options.base} x 1 = 3`);
        expect(table).toContain(`${options.base} x 5 = 15`);
        expect(table).toContain(`${options.base} x 10 = 30`);
        expect(rows).toBe( options.limit );


    });
})