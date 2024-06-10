/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserMapper } from "./user_mapper";
import { MeetingMapper } from "./meeting_mapper";

@Module({
    providers:[UserMapper,MeetingMapper],
    exports:[UserMapper,MeetingMapper]
})
export class MapperModule{};