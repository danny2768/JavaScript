import { envs } from "./envs.plugin";

describe("envs.plugin.ts", () => {

    test("Should returnn envs options", () => {
        expect(envs).toEqual({
            PORT: 3000,
            MAILER_SERVICE: "gmail",
            MAILER_EMAIL: "cobos.eduardo276@gmail.com",
            MAILER_SECRET_KEY: "nlrhltrktqanzmgz",
            PROD: true,
            MONGO_URL:
                "mongodb://danny2768:HaveFunGuessingThisPass@localhost:27017/",
            MONGO_DB_NAME: "NOC-TEST",
            MONGO_USER: "danny2768",
            MONGO_PASS: "HaveFunGuessingThisPass",
        });
    });

    test("Should return error if not found env", async () => {
        
        jest.resetModules();
        process.env.PORT = 'ABC'

        try {
            await import("./envs.plugin");
            expect(true).toBe(false);

        } catch (error) {
            expect(`${error}`).toContain('"PORT" should be a valid integer')
        }
    })
});
