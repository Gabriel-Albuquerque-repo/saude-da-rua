/* eslint-disable no-unused-vars */
import { Volunteer } from '@entities/Volunteer';

interface IVolunteerRepository {
    findByEmail(email: string): Promise<boolean>;
    // Em produção, é melhor usar o void
    saveVolunteer(volunteer: Volunteer): Promise<boolean>;
}

export default IVolunteerRepository;
