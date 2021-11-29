/* eslint-disable import/no-unresolved */
import { Volunteer } from '@entities/Volunteer';
import IVolunteerRepository from '@repositories/IVolunteerRepository';

export default class MongoVolunteerRepository implements IVolunteerRepository {
  public async findByEmail(email: string): Promise<Volunteer> {
    const volunteer = await

    return volunteer;
  }

  public async saveVolunteer(volunteer: Volunteer): Promise<void> {

  }
}
