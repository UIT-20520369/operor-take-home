/* eslint-disable prettier/prettier */
import { User } from "../entity/User/User";
import { UserDomain } from "../../domain/user/user";
import { Injectable } from "@nestjs/common";
@Injectable()
export class UserMapper {
    toDomain(entity: User):UserDomain {
        const domain = new UserDomain();
        domain.id = entity.id;
        domain.firstName = entity.firstName;
        domain.lastName = entity.lastName;
        domain.email = entity.email;
        domain.gender = entity.gender;
        domain.ip_address = entity.ip_address;
        domain.days = entity.days;
        return domain;
    }
    toDomains(entities: User[]):UserDomain[] {
        return entities.map(e => this.toDomain(e))
    }
    toEntity(domain: UserDomain):User {
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
    toEntities(domains: UserDomain[]):User[] {
        return domains.map(d => this.toEntity(d));
    }
}