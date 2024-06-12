/* eslint-disable prettier/prettier */
import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entity/User/User"
import { Meeting } from "../entity/Meeting/Meeting"
import { Initial1718186534978 } from "../../migration/1718186534978-Initial"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    port: 6543,
    username: "postgres.vrtlpgdbwdpvxvrvuwfw",
    password: "Khanhanbz54*",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User,Meeting],
    migrations: [Initial1718186534978],
    subscribers: [],
})
export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = AppDataSource;

            return dataSource.initialize();
        },
    },
];
