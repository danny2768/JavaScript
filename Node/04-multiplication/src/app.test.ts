import { ServerApp } from './presentation/server-app';


describe('Test app.ts', () => {

    test('Should call server.run with values', async() => {
        
        const serverRunMock = jest.fn();
        ServerApp.run = serverRunMock;

        process.argv = ['node', 'app.ts', '-b', '7', '-s', 'false', '-l', '12'];

        await import('./app');

        expect(serverRunMock).toHaveBeenCalledWith({
            base: 7,
            showTable: false,
            limit: 12,
            fileDestination: "outputs",
            fileName: "multiplication-table",
        });

	});
    
})