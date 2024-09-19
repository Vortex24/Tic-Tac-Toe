import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.MONGODB_URL);

async function setupDBConnection() {
    try {
        await client.connect();
        const db = client.db("tic-tac-toe");

        console.log("Connection established with mongoDB!");
    }
    finally {
        // client connection will close on finish or error
        await client.close();
    }
};

async function getDatabase() {
    return db;
}

export { getDatabase, setupDBConnection };