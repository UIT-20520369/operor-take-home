/* eslint-disable prettier/prettier */
import { User } from "../entity/User/User";
import { UserDomain } from "../../domain/user/user";
import { UserDTO } from "../../domain/user/user_dto";
import { Injectable } from "@nestjs/common";
import { MeetingMapper } from "./meeting_mapper";
@Injectable()
export class UserMapper {
    constructor(private _meetingMapper: MeetingMapper) { }
    toDomain(entity: User): UserDomain {
        const domain = new UserDomain();
        domain.id = entity.id;
        domain.firstName = entity.firstName;
        domain.lastName = entity.lastName;
        domain.email = entity.email;
        domain.gender = entity.gender;
        domain.ip_address = entity.ip_address;
        domain.days = entity.days;
        domain.meetings = this._meetingMapper.toDomains(entity.meetings);
        return domain;
    }
    toDomains(entities: User[]): UserDomain[] {
        return entities.map(e => this.toDomain(e))
    }
    toEntity(domain: UserDomain): User {
        const entity = new User();
        entity.id = domain.id;
        entity.firstName = domain.firstName;
        entity.lastName = domain.lastName;
        entity.email = domain.email;
        entity.gender = domain.gender;
        entity.ip_address = domain.ip_address;
        entity.days = domain.days;
        return entity
    }
    toEntities(domains: UserDomain[]): User[] {
        return domains.map(d => this.toEntity(d));
    }
    toDTO(domain: UserDomain): UserDTO {
        const dto = new UserDTO();
        dto.id = domain.id;
        dto.firstName = domain.firstName;
        dto.lastName = domain.lastName;
        dto.email = domain.email;
        dto.gender = domain.gender;
        let busyDay=0;
        dto.meeting_days = domain.meetings.map(m => {
            busyDay+=m.end_day-m.start_day+1;
            return { start_day: m.start_day, end_day: m.end_day }
        })
        dto.days_without_meetings = domain.days-busyDay;
        return dto;
        
    }
    toDTOs(domains:UserDomain[]):UserDTO[]{
        return domains.map(domain=> this.toDTO(domain))
    }
}