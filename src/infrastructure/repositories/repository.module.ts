/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from "@nestjs/common";
import { UserRepository } from "./User/UseRepository";
import { MapperModule } from "../mapper/mapper.module";
@Module({
    imports: [MapperModule],
    providers: [UserRepository],
    exports: [UserRepository]
})
export class RepositoryModule { }