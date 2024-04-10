import { LogEntity, LogSeverityLevel } from "./log.entity";

describe("log.entity.ts", () => {

    const dataObj = {
        message: "log.entity.test.ts",
        origin: "log.entity.test.ts",
        severityLevel: LogSeverityLevel.low,
    };

    test("Should create a LogEntity instance", () => {        
        const log = new LogEntity(dataObj);

        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe(dataObj.message);
        expect(log.origin).toBe(dataObj.origin);
        expect(log.severityLevel).toBe(dataObj.severityLevel);
        expect(log.createdAt).toBeInstanceOf(Date);        
    });

    test('Should create a logEntity instance from json', () => {
        const json = `{
            "message":"Service https://google.com working",
            "severityLevel":"low",
            "origin":"check-service.ts",
            "createdAt":"2024-04-08T11:44:30.474Z"
        }`;

        const log = LogEntity.fromJson(json);

        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe("Service https://google.com working");
        expect(log.origin).toBe("check-service.ts");
        expect(log.severityLevel).toBe(LogSeverityLevel.low);
        expect(log.createdAt).toBeInstanceOf( Date );
        expect(log.createdAt).toStrictEqual( new Date("2024-04-08T11:44:30.474Z") );        
    })

    test('Should create a logEntity instance from object', () => {
        
        const log = new LogEntity(dataObj);

        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe("log.entity.test.ts");
        expect(log.origin).toBe("log.entity.test.ts");
        expect(log.severityLevel).toBe(LogSeverityLevel.low);

        expect(log.createdAt).toBeInstanceOf( Date );        
    })

});
