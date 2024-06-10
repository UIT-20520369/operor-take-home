/* eslint-disable prettier/prettier */
import { Meeting } from "../entity/Meeting/Meeting";
import { MeetingDomain } from "../../domain/meeting/meeting";
import { Injectable } from "@nestjs/common";
Injectable()
export class MeetingMapper {
    toDomain(entity: Meeting) :MeetingDomain | null {
        const domain = new MeetingDomain();
        domain.id = entity.id;
        domain.created_at = entity.created_at;
        domain.user_id = entity.user_id;
        domain.start_day = entity.start_day;
        domain.end_day = entity.end_day;
        return domain;
    }
    toDomains(entities: Meeting[]):MeetingDomain[] {
        return entities.map(e => this.toDomain(e))
    }
    toEntity(domain: MeetingDomain):Meeting|null {
        const entity = new Meeting();
        entity.id = domain.id;
        entity.created_at= domain.created_at;
        entity.user_id = domain.user_id;
        entity.room_id= domain.room_id;
        entity.start_day = domain.start_day;
        entity.end_day = domain.end_day;
        return entity
    }
    toEntities(domains: MeetingDomain[]):Meeting[] {
        return domains.map(d => this.toEntity(d));
    }
}