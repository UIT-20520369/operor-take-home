/* eslint-disable prettier/prettier */
import { MeetingDomain } from "../meeting/meeting";
export class UserDomain {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    ip_address: string;
    days: number;
    created_at: Date;
    meetings: MeetingDomain[]
    update(user: Partial<UserDomain>) {
        // Iterate through the keys of the updates object
        for (const key in user) {
            if (user.hasOwnProperty(key)) {
                // Check if the value is not null or undefined
                if (user[key] !== null && user[key] !== undefined) {
                    // Update the current object with the new value
                    (this as any)[key] = user[key];
                }
            }
        }
    }

}