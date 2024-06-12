/* eslint-disable prettier/prettier */
export class UserDTO {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    days: number;
    meeting_days: Array<{ start_day: number; end_day: number }>;
    days_without_meetings: number;
}