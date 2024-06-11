/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
export class UserSpecialization{
    constructor(){
        this.limit=10;
        this.offset=0;
    }
    @ApiProperty()
    offset:number;
    @ApiProperty()
    limit:number;
}