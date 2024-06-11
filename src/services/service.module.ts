/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from "@nestjs/common";
import { UserService } from "./user/UserServices";
import { AuthService } from "./auth/AuthServices";
import { AuthGuard } from "./auth/AuthGuard";
import { RepositoryModule } from "../infrastructure/repositories/repository.module";
import { MapperModule } from "../infrastructure/mapper/mapper.module";
import { jwtConstants } from "./auth/constants";
import { JwtModule } from "@nestjs/jwt";
@Module({
    imports: [RepositoryModule, MapperModule, JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '360s' },
    }),],
    providers: [UserService, MapperModule, AuthService,AuthGuard],
    exports: [UserService, AuthService,AuthGuard]
})
export class ServiceModule { }