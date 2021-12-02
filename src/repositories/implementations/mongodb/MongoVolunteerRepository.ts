/* eslint-disable class-methods-use-this */
import { Volunteer } from '@entities/Volunteer';
import IVolunteerRepository from '@repositories/IVolunteerRepository';
import VolunteerModel from '@schemas/Volunteer';

export default class MongoVolunteerRepository implements IVolunteerRepository {
  public async findByEmail(email: string): Promise<Volunteer> {
    const volunteer = await VolunteerModel.findOne({ email }).select('_id email');

    return volunteer;
  }

  public saveVolunteer(volunteer: Volunteer): Promise<void> {
    return new VolunteerModel(volunteer).save();
  }
}
