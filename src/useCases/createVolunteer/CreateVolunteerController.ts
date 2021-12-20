import { Request, Response } from 'express';
import { FreeDaysOfWeek, OccupationOptions, IOccupationsOptions } from '@entities/Volunteer';
import CreateVolunteerUseCase from './CreateVolunteerUseCase';

class CreateVolunteerController {
  private createVolunteerUseCase: CreateVolunteerUseCase;

  constructor(createVolunteerUseCase: CreateVolunteerUseCase) {
    this.createVolunteerUseCase = createVolunteerUseCase;
  }

  public async handle(request: Request, response: Response): Promise<Response> {
    interface IRequest {
      fullName: string,

      email: string,

      cellphoneNumberWithDDD: string,

      occupation: OccupationOptions | IOccupationsOptions,

      expertise: string,

      listFreeDaysOfWeek?: Array<FreeDaysOfWeek>,

      experienceWithHealthy: string,

      didParticipate: boolean,

      numberOfParticipation: number,

      howDidKnowOfSDR: string,
    }

    const requestDestructured: IRequest = request.body;

    try {
      await this.createVolunteerUseCase.execute(requestDestructured);

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

export default CreateVolunteerController;
