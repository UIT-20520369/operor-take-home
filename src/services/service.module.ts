/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from "@nestjs/common";
import { UserService } from "./user/UserServices";
import { RepositoryModule } from "../infrastructure/repositories/repository.module";

@Module({
    imports:[RepositoryModule],
    providers:[UserService],
    exports:[UserService]
})
export class ServiceModule{}