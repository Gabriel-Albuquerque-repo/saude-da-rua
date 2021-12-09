import { Schema, model, Model } from 'mongoose';
import IFormSchema from './interfaces/IFormSchema';

const schema = new Schema<IFormSchema>({
  _id: {
    type: String,
  },

  email: {
    type: String,
    trim: true,
    required: true,
  },

  name: {
    type: String,
    trim: true,
    required: true,
  },

  cellphoneNumberWithDDD: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    trim: true,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
});

const FormModel: Model<IFormSchema> = model<IFormSchema>('Form', schema, 'forms');

export default FormModel;
