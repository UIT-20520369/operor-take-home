/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from "@nestjs/common";
import { UserService } from "./user/UserServices";
import { RepositoryModule } from "../infrastructure/repositories/repository.module";
import { MapperModule } from "../infrastructure/mapper/mapper.module";
@Module({
    imports:[RepositoryModule,MapperModule],
    providers:[UserService,MapperModule],
    exports:[UserService]
})
export class ServiceModule{}