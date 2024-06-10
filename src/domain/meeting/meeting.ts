/* eslint-disable prettier/prettier */
import { UserDomain } from "../user/user"
export class MeetingDomain {
    id: number;
    user_id: number;
    start_day: number;
    end_day: number;
    room_id: number;
    created_at: Date;
    user: UserDomain;
    update(meeting: Partial<MeetingDomain>) {
        // Iterate through the keys of the updates object
        for (const key in meeting) {
            if (meeting.hasOwnProperty(key)) {
                // Check if the value is not null or undefined
                if (meeting[key] !== null && meeting[key] !== undefined) {
                    // Update the current object with the new value
                    (this as any)[key] = meeting[key];
                }
            }
        }
    }
}