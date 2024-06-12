/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataSource } from "typeorm";
import { User } from "../../entity/User/User";
import { UserDomain } from "../../../domain/user/user";
import { UserMapper } from "../../mapper/user_mapper";
import { MeetingMapper } from "../../mapper/meeting_mapper";
import { Meeting } from "../../entity/Meeting/Meeting";
import { MeetingDomain } from "../../../domain/meeting/meeting";
import { MapperModule } from "../../mapper/mapper.module";
import { UserSpecialization } from "../../../domain/user/user_specialization";
import { Injectable, Inject } from "@nestjs/common";
@Injectable()
export class UserRepository {
    constructor(private _userMapper: UserMapper, private _meetMapper: MeetingMapper, @Inject('DATA_SOURCE') private datasource: DataSource) {
    }
    async findAll(paging?: UserSpecialization): Promise<UserDomain[]> {
        const entities = await this.datasource.getRepository(User).createQueryBuilder("user").leftJoinAndSelect("user.meetings", "meeting","meeting.user_id =user.id").limit(paging.limit).offset(paging.offset).orderBy("user.id","ASC").getMany();
        const domains = this._userMapper.toDomains(entities);
        return domains;
    }
    async findByEmail(email: string): Promise<UserDomain> {
        const entity = await this.datasource.getRepository(User).createQueryBuilder("user").where("user.email =:email", { email: email }).getOne();
        const domain = this._userMapper.toDomain(entity);
        return domain;
    }
}