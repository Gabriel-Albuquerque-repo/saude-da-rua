/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { Volunteer } from '@entities/Volunteer';

export default interface IVolunteerRepository {
    findOne(email: string): Promise<Volunteer>;
    save(volunteer: Volunteer): Promise<void>;
}
