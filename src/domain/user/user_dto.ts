/* eslint-disable prettier/prettier */
export class UserDTO {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    meeting_days:Array<{start_day:number;end_day:number}>;
    days_without_meetings:number;
}