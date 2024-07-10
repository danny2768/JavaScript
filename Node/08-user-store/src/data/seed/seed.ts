import { envs } from "../../config";
import { CategoryModel, MongoDatabase, ProductModel, UserModel } from "../mongo";
import { seedData } from "./data";

(async () => {
    if ( process.env.NODE_ENV !== 'development' ) {
        console.log('This script is only for development environment');
        process.exit(1);
    }

    MongoDatabase.connect({
        dbName: envs.MONGO_DB_NAME,
        mongoUrl: envs.MONGO_URL
    });

    await main();

    MongoDatabase.disconnect();
}) ();

const randomBetween0AndX = (x: number) => Math.floor(Math.random() * x);

async function main() {

    // 0. Borrar todos los datos
    await Promise.all([
        UserModel.deleteMany(),
        CategoryModel.deleteMany(),
        ProductModel.deleteMany()
    ]);

    // 1. Crear usuarios
    const users = await UserModel.insertMany( seedData.users );

    // 2. Crear categorías
    const categories = await CategoryModel.insertMany(
        seedData.categories.map( category => { 
            return { 
                ...category, 
                user: users[randomBetween0AndX(users.length - 1)]._id 
            };
        })
    );

    // 3. Crear productos
    await ProductModel.insertMany(
        seedData.products.map( product => { 
            return { 
                ...product,
                user: users[randomBetween0AndX(users.length - 1)]._id,
                category: categories[randomBetween0AndX(categories.length - 1)]._id 
            };
        })
    );


    console.log('seeded!');
}