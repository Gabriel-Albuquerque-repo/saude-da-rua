import { Volunteer } from '@entities/Volunteer';
import IVolunteerRepository from '@repositories/IVolunteerRepository';
import ICreateVolunteerRequestDTO from './CreateVolunteerDTO';

export default class CreateVolunteerUseCase {
  private volunteerRepository: IVolunteerRepository;

  constructor(volunteerRepository: IVolunteerRepository) {
    this.volunteerRepository = volunteerRepository;
  }

  async execute(data: ICreateVolunteerRequestDTO) {
    const volunteerAlreadyExists = await this.volunteerRepository.findByEmail(data.email);

    if (volunteerAlreadyExists) {
      throw new Error('Volunteer already exists / Voluntário já existe');
    }

    const volunteer = new Volunteer(data);

    await this.volunteerRepository.saveVolunteer(volunteer);
  }
}
