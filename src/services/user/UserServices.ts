/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserDomain } from "../../domain/user/user";
import { UserDTO } from "../../domain/user/user_dto";
import { UserSpecialization } from "../../domain/user/user_specialization";
import { UserRepository } from "../../infrastructure/repositories/User/UseRepository";
import { Injectable } from "@nestjs/common";
import { UserMapper } from "../../infrastructure/mapper/user_mapper";
@Injectable()
export class UserService {
    constructor(private repository: UserRepository,private _userMapper:UserMapper) {

    }
    async findAll(paging?:UserSpecialization): Promise<UserDTO[]> {
        const result = await this.repository.findAll(paging);
        return this._userMapper.toDTOs(result);
    }
}
