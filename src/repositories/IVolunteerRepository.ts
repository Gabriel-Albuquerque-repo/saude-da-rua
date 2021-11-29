/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { Volunteer } from '@entities/Volunteer';

export default interface IVolunteerRepository {
    findByEmail(email: string): Promise<Volunteer>;
    saveVolunteer(volunteer: Volunteer): Promise<void>;
}
