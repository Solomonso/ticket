import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
import { Ticket } from "./models/Ticket";
import { User } from "./models/User";

dotenv.config();

export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as any,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: Boolean(process.env.DB_SYNC),
    logging: Boolean(process.env.DB_LOGGING),
    entities: [Ticket, User],
    migrations: [],
    subscribers: [],
});


AppDataSource.initialize()
.then(() => {
    console.log("Database connection established");
}).catch((error) => {
    console.error("Error connecting to database", error.message);
});