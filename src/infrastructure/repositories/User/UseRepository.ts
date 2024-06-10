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
import { Injectable ,Inject} from "@nestjs/common";
@Injectable()
export class UserRepository{
    constructor(private _userMapper:UserMapper,private _meetMapper:MeetingMapper,@Inject('DATA_SOURCE') private datasource:DataSource){
    }
    async findAll():Promise<UserDomain[]>{
        const entities =await this.datasource.getRepository(User).find();
        const domains = this._userMapper.toDomains(entities);
        return domains;
    }
}