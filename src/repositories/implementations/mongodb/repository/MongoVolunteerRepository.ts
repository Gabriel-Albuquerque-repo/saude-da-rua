/* eslint-disable no-useless-return */
/* eslint-disable class-methods-use-this */
import { Volunteer } from '@entities/Volunteer';
import IVolunteerRepository from '@repositories/interfaces/IVolunteerRepository';
import VolunteerModel from '@schemas/VolunteerSchema';

class MongoVolunteerRepository implements IVolunteerRepository {
  public async findByEmail(email: string): Promise<boolean> {
    const checkIfAlreadyExists: boolean = await VolunteerModel.exists({ email });

    return checkIfAlreadyExists;
  }

  // Precisa colocar no generics que pode lançar um Error?
  public async saveVolunteer(volunteer: Volunteer): Promise<boolean> {
    const newVolunteerRepository = new VolunteerModel(volunteer);

    const checkIfWasSavedRepository = await newVolunteerRepository.save();

    return newVolunteerRepository === checkIfWasSavedRepository;
  }
}

export default MongoVolunteerRepository;
