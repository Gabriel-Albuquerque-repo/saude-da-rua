import { Volunteer } from '../src/entities/Volunteer';
import IVolunteerRepository from '../src/repositories/interfaces/IVolunteerRepository';
import ICreateVolunteerRequestDTO from '../src/useCases/createVolunteer/CreateVolunteerDTO';

class VolunteerRepositoryInMemory implements IVolunteerRepository {
  private volunteer: Array<Volunteer> = [];

  async findByEmail(email: string): Promise<boolean> {
    const checkIfExistsInMemory: boolean = this.volunteer.some(
      (volunteer) => volunteer.email === email,
    );

    return checkIfExistsInMemory;
  }

  async saveVolunteer(volunteer: ICreateVolunteerRequestDTO): Promise<boolean> {
    const newVolunteer = new Volunteer(volunteer);

    this.volunteer.push(newVolunteer);

    const checkIfVolunteerWasSaved: boolean = await this.findByEmail(newVolunteer.email);

    return checkIfVolunteerWasSaved;
  }
}

export default VolunteerRepositoryInMemory;
