import Form from '@entities/Form';
import IFormRepository from '@repositories/interfaces/IFormRepository';
import ICreateFormDTO from './createFormDTO';

class CreateFormUseCase {
  private formRepository: IFormRepository;

  constructor(formRepository: IFormRepository) {
    this.formRepository = formRepository;
  }

  async execute(data: ICreateFormDTO) {
    const newForm = new Form(data);

    await this.formRepository.saveForm(newForm);
  }
}

export default CreateFormUseCase;
