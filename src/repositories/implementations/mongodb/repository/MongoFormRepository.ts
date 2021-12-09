/* eslint-disable no-useless-return */
/* eslint-disable class-methods-use-this */
import Form from '@entities/Form';
import IFormRepository from '@repositories/interfaces/IFormRepository';
import FormModel from '@schemas/FormSchema';

class MongoFormRepository implements IFormRepository {
  public saveForm(form: Form): Promise<void> {
    new FormModel(form).save();

    return;
  }
}

export default MongoFormRepository;
