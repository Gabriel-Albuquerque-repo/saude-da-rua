import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

class CreateUserValidation {
  public request: Request;

  public response: Response;

  public next: NextFunction;

  constructor(request: Request, response: Response, next: NextFunction) {
    this.request = request;

    this.response = response;

    this.next = next;
  }

  async validateInput() {
    // const validation = createValidator();
    const schema = Joi.object().keys({
      fullName: Joi.required(),

      email: Joi.required(),

      cellphoneNumberWithDDD: Joi.required(),

      occupation: Joi.required(),

      expertise: Joi.required(),

      listfreeDaysOfWeek: Joi.required(),

      experienceWithHealthy: Joi.required(),

      didParticipate: Joi.required(),

      numberOfParticipation: Joi.required(),

      howDidKnowOfSDR: Joi.required(),
    });

    try {
      await schema.validateAsync(this.request.body);

      this.next();
    } catch (error) {
      this.response.status(400).json({ ErrorMessage: error.details[0].message });
    }
  }
}

export default CreateUserValidation;
