/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserDomain } from "../../domain/user/user";
import { UserRepository } from "../../infrastructure/repositories/User/UseRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    constructor(private repository: UserRepository) {

    }
    async findAll(): Promise<UserDomain[]> {
        const result = this.repository.findAll();
        return result;
    }
}
