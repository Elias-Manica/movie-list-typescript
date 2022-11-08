import dotenv from "dotenv";
dotenv.config();
import pg from "pg";
var Pool = pg.Pool;
var databaseConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
};
var connection = new Pool(databaseConfig);
export default connection;
