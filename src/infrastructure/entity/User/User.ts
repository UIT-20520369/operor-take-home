/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from "typeorm"
import { Meeting } from "../Meeting/Meeting"
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string
    @Column()
    email: string
    @Column()
    gender: string
    @Column()
    ip_address: string
    @Column('int8')
    days: number

    @Column('timestamp')
    created_at: Date

    @OneToMany(()=>Meeting,(meeting)=>meeting.user)
    meetings:Meeting[]

}
