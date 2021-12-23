import VolunteerRepositoryInMemory from '../../in-memory/VolunteerRepositoryInMemory';
import { OccupationOptions, FreeDaysOfWeek } from '../../src/entities/Volunteer';
import ICreateVolunteerRequestDTO from '../../src/useCases/createVolunteer/CreateVolunteerDTO';
import CreateVolunteerUseCase from '../../src/useCases/createVolunteer/CreateVolunteerUseCase';
import IVolunteerRepository from '../../src/repositories/interfaces/IVolunteerRepository';

describe('Create volunteer UseCase', () => {
  let volunteersRepositoryInMemory: IVolunteerRepository;
  let createVolunteerUseCase: CreateVolunteerUseCase;

  beforeAll(() => {
    volunteersRepositoryInMemory = new VolunteerRepositoryInMemory();
    createVolunteerUseCase = new CreateVolunteerUseCase(volunteersRepositoryInMemory);
  });

  it('should be able to create a new volunteer', async () => {
    const volunteerData: ICreateVolunteerRequestDTO = {
      fullName: 'Lore Ipsum',
      email: 'newVolunteer@gmail.com',
      cellphoneNumberWithDDD: '(81) 99999-99999',
      occupation: OccupationOptions.MEDICO,
      expertise: 'Lore Ipsum',
      listFreeDaysOfWeek: [
        FreeDaysOfWeek.QUARTA,
        FreeDaysOfWeek.QUINTA,
      ],
      experienceWithHealthy: 'Lorem Ipsum',
      didParticipate: false,
      numberOfParticipation: 0,
      howDidKnowOfSDR: 'Lorem Ipsum',
    };

    const checkUseCaseTest: boolean = await createVolunteerUseCase.execute(volunteerData);

    expect(checkUseCaseTest).toBe(true);
  });

  it('should not be able to create an existing volunteer', async () => {
    const volunteerData: ICreateVolunteerRequestDTO = {
      fullName: 'Lore Ipsum',
      email: 'existingVolunteer@gmail.com',
      cellphoneNumberWithDDD: '(81) 99999-99999',
      occupation: OccupationOptions.MEDICO,
      expertise: 'Lore Ipsum',
      listFreeDaysOfWeek: [
        FreeDaysOfWeek.QUARTA,
        FreeDaysOfWeek.QUINTA,
      ],
      experienceWithHealthy: 'Lorem Ipsum',
      didParticipate: false,
      numberOfParticipation: 0,
      howDidKnowOfSDR: 'Lorem Ipsum',
    };

    await createVolunteerUseCase.execute(volunteerData);

    await expect(createVolunteerUseCase.execute(volunteerData))
      .rejects
      .toEqual(new Error('Volunteer already exists / Voluntário já existe'));
  });
});
