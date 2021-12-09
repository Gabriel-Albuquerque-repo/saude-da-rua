/* eslint-disable no-useless-return */
/* eslint-disable class-methods-use-this */
import { Volunteer } from '@entities/Volunteer';
import IVolunteerRepository from '@repositories/interfaces/IVolunteerRepository';
import VolunteerModel from '@schemas/VolunteerSchema';

class MongoVolunteerRepository implements IVolunteerRepository {
  public async findByEmail(email: string): Promise<Volunteer> {
    const volunteer = await VolunteerModel.findOne({ email }).select('_id email');

    return volunteer;
  }

  public saveVolunteer(volunteer: Volunteer): Promise<void> {
    new VolunteerModel(volunteer).save();

    return;
  }
}

export default MongoVolunteerRepository;
