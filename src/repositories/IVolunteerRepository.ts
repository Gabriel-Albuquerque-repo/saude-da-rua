/* eslint-disable no-unused-vars */
import { Volunteer } from '@entities/Volunteer';
import { Document } from 'mongoose';

interface IVolunteerRepository {
    findByEmail(email: string): Promise<Volunteer>;
    saveVolunteer(volunteer: Volunteer): Promise<Document<void>>;
}

export default IVolunteerRepository;
