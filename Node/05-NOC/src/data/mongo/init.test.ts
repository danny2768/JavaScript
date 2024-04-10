import mongoose from 'mongoose';
import { MongoDatabase } from './init';
describe('Init MongoDB', () => {

    afterAll(() => {
        mongoose.connection.close();
    })
    
    test('Should be able to connect to MongoDB', async () => {
        
        const conected = await MongoDatabase.connect({
            dbName: process.env.MONGO_DB_NAME!,
            mongoUrl: process.env.MONGO_URL!,
        });

        expect(conected).toBeTruthy();
    });

    test('Error if not connected to MongoDB', async () => {
        try {
            await MongoDatabase.connect({
                dbName: 'something',
                mongoUrl: 'something',
            });
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBeTruthy();
        }
    })

})