/* eslint-disable no-unused-vars */
import Form from '@entities/Form';

interface IFormRepository {
    saveForm(form: Form): Promise<void>;
}

export default IFormRepository;
