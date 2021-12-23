import { Volunteer } from '@entities/Volunteer';
import IVolunteerRepository from '@repositories/interfaces/IVolunteerRepository';
import ICreateVolunteerRequestDTO from './CreateVolunteerDTO';

class CreateVolunteerUseCase {
  private volunteerRepository: IVolunteerRepository;

  constructor(volunteerRepository: IVolunteerRepository) {
    this.volunteerRepository = volunteerRepository;
  }

  async execute(data: ICreateVolunteerRequestDTO) {
    const volunteerAlreadyExists: boolean = await this.volunteerRepository.findByEmail(data.email);

    if (volunteerAlreadyExists) {
      throw new Error('Volunteer already exists / Voluntário já existe');
    }

    const newVolunteer = new Volunteer(data);

    // eslint-disable-next-line operator-linebreak
    const checkIfWasSavedUseCase: boolean =
     await this.volunteerRepository.saveVolunteer(newVolunteer);

    return !!checkIfWasSavedUseCase;
  }
}

export default CreateVolunteerUseCase;
