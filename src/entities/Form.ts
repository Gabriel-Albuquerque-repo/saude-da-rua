import { v4 as uuidv4 } from 'uuid';

class Form {
  public readonly _id?: string;

  public createAt?: number;

  public email?: string;

  public name?: string;

  public cellphoneNumberWithDDD?: string;

  public subject?: string;

  public message?: string;

  constructor(props: Omit<Form, '_id' | 'createdAt'>, _id?: string, createdAt?: number) {
    Object.assign(this, props);

    if (!_id) {
      // eslint-disable-next-line no-underscore-dangle
      this._id = uuidv4();
    }

    if (!createdAt) {
      this.createAt = Date.now();
    }
  }
}

export default Form;
