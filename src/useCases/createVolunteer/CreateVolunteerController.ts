import { Request, Response } from 'express';
import CreateVolunteerUseCase from './CreateVolunteerUseCase';

export default class CreateVolunteerController {
  private createVolunteerUseCase: CreateVolunteerUseCase;

  constructor(createVolunteerUseCase: CreateVolunteerUseCase) {
    this.createVolunteerUseCase = createVolunteerUseCase;
  }

  public async handle(request: Request, response: Response): Promise<Response> {
    const {
      fullName,
      email,
      cellphoneNumberWithDDD,
      occupation,
      expertise,
      listfreeDaysOfWeek,
      experienceWithHealthy,
      didParticipate,
      numberOfParticipation,
      howDidKnowOfSDR,
    } = request.body;

    try {
      await this.createVolunteerUseCase.execute({
        fullName,
        email,
        cellphoneNumberWithDDD,
        occupation,
        expertise,
        listfreeDaysOfWeek,
        experienceWithHealthy,
        didParticipate,
        numberOfParticipation,
        howDidKnowOfSDR,
      });

      return response.status(201).json({
        SucessMessage: `Voluntário ${request.body.fullName} cadastrado!`,
      });
    } catch (err) {
      return response.status(400).json({
        ErrorMessage: err.message || 'Unexpected error.',
      });
    }
  }
}
