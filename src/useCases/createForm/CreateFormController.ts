import { Request, Response } from 'express';
import CreateFormUseCase from './CreateFormUseCase';

class CreateFormController {
  private createFormController: CreateFormUseCase;

  constructor(createFormUseCase: CreateFormUseCase) {
    this.createFormController = createFormUseCase;
  }

  public async handle(request: Request, response: Response): Promise<Response> {
    const {
      email,
      name,
      cellphoneNumberWithDDD,
      subject,
      message,
    } = request.body;

    try {
      await this.createFormController.execute({
        email,
        name,
        cellphoneNumberWithDDD,
        subject,
        message,
      });

      return response.status(201).json({ SucessMessage: 'Formulário inserido!' });
    } catch (err) {
      return response.status(400).json({
        ErrorMessage: err.message || 'Unexpected error!',
      });
    }
  }
}

export default CreateFormController;
