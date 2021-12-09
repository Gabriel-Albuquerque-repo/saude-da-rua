/* eslint-disable no-unused-vars */
import { Volunteer } from '@entities/Volunteer';

interface IVolunteerRepository {
    findByEmail(email: string): Promise<Volunteer>;
    saveVolunteer(volunteer: Volunteer): Promise<void>;
}

export default IVolunteerRepository;
