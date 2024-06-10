/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column ,ManyToOne} from "typeorm"
import { User } from "../User/User"
@Entity()
export class Meeting {

    @PrimaryGeneratedColumn()
    id: number

    @Column('int8')
    user_id: number

    @Column('int8')
    start_day: number
    @Column('int8')
    end_day: number
    @Column('int8')
    room_id: number

    @Column('timestamp')
    created_at: Date
    
    @ManyToOne(()=>User,(user)=>user.meetings)
    user:User

}
