import { envs } from './../../../config/plugins/envs.plugin';
import { MongoDatabase } from "../init"
import mongoose from 'mongoose';
import { LogModel } from './log.model';


describe('log.model.test.ts', () => {

    beforeAll(async () => {
        await MongoDatabase.connect({
            mongoUrl: envs.MONGO_URL,
            dbName: envs.MONGO_DB_NAME,
        })
    })

    afterAll(() => {
        mongoose.connection.close();
    })

    test('Should return logModel', async () => {

        const logData = {
            origin: 'log.model.test.ts',
            message: 'Should return log',
            severityLevel: 'low'            
        }

        const log = await LogModel.create(logData);

        expect(log).toEqual( expect.objectContaining({
            ...logData,
            createdAt: expect.any(Date),
            id: expect.any(String),
        }) )   


        await LogModel.findByIdAndDelete(log.id);    
    })

    test('Should return the schema object', () => {
        const schema = LogModel.schema.obj;
        
        expect(schema).toEqual( expect.objectContaining({
            
            message: { 
                type: expect.any(Function), 
                required: true 
            },
            origin: { 
                type: expect.any(Function)
            },
            severityLevel: {
                type: expect.any(Function),
                enum: [ 'low', 'medium', 'high' ],
                default: 'low'
            },
            createdAt: { 
                type: expect.any(Function), 
                default: expect.any(Date) 
            }
              
        }))
    })

})