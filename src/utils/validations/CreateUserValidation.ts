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
    const schema = Joi.object().keys({
      id: Joi
        .forbidden(),

      _id: Joi
        .forbidden(),

      fullName: Joi
        .string()
        .trim()
        .required(),

      email: Joi
        .string()
        .email({
          tlds: {
            allow: ['com', 'br', 'net'],
          },
        })
        .lowercase()
        .trim()
        .required(),

      cellphoneNumberWithDDD: Joi
        .string()
        .pattern(/^\([1-9]{2}\) 9[1-9][0-9]{3}-[0-9]{4}$/, '(xx) 9xxxx-xxxx')
        .required(),

      occupation: Joi
        .required(),

      expertise: Joi
        .required(),

      listfreeDaysOfWeek: Joi
        .required(),

      experienceWithHealthy: Joi
        .string()
        .required(),

      didParticipate: Joi
        .boolean()
        .required(),

      numberOfParticipation: Joi
        .number()
        .integer()
        .min(0)
        .max(100)
        .required(),

      howDidKnowOfSDR: Joi
        .string()
        .required(),
    });

    try {
      const validatedBody = await schema.validateAsync(this.request.body);

      this.request.body = validatedBody;

      return this.next();
    } catch (error) {
      if (error.details[0].path[0] === 'id') {
        return this.response
          .status(403)
          .json(
            { ErrorMessage: error.details[0].message },
          );
      }

      return this.response
        .status(400)
        .json(
          { ErrorMessage: error.details[0].message, err: error },
        );
    }
  }
}

export default CreateUserValidation;
