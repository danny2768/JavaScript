import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('httpClientPlugin', () => {

    test('httpClientPlugin.get() should return a string', async() => {

        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1')

        expect(data).toEqual({ 
            userId: expect.any(Number), 
            id: expect.any(Number), 
            title: expect.any(String), 
            completed: expect.any(Boolean) 
        })
    });

    test('httpClientPlugin should have GET, POST, PUT and DELETE methods', () => {
        expect(httpClientPlugin).toEqual({
            get: expect.any(Function),
            post: expect.any(Function),
            put: expect.any(Function),
            delete: expect.any(Function)
        })
    })
})