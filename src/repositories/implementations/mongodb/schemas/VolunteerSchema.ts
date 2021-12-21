import { Schema, model, Model } from 'mongoose';
import { IVolunteerSchema, listEnumFreeDays, listEnumOccupation } from './interfaces/IVolunteerSchema';

// OBS.: Saber máximos e mínimos do tamanho de strings livres

const schema = new Schema<IVolunteerSchema>({
  _id: {
    type: String,
  },

  createdAt: {
    type: Date,
    required: true,
  },

  updatedAt: {
    type: Date,
    required: true,
  },

  fullName: {
    type: String,
    required: true,
    trim: true,
    // minLength: ,
    // maxLength: ,
  },

  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
    match: [
      /^\w+([.\-_]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Email inválido!',
    ],
  },

  cellphoneNumberWithDDD: {
    type: String,
    required: true,
    minlength: 15,
    maxlength: [15, 'O número deve ter formatação (xx) 9xxxx-xxxx e deve exatamente 15 caracteres'],
    match: [
      /^\([1-9]{2}\) 9[1-9][0-9]{3}-[0-9]{4}$/,
      'Número inválido',
    ],
  },

  // OBS.: Provavelmente tirar o enum (pesquisar se pode funcionar assim)
  occupation: {
    type: String,
    required: true,
    enum: listEnumOccupation,
  },

  expertise: {
    type: String,
    trim: true,
    required: true,
  },

  listFreeDaysOfWeek: {
    type: [{
      type: String,
      enum: {
        values: listEnumFreeDays,
        message: '{VALUE} não é uma opção válida',
      },
      required: true,
    }],
    default: undefined,
  },

  numberOfFreeDaysOfWeek: {
    type: Number,
    min: [1, 'Ao menos 1 dia deve ser livre.'],
    max: [7, 'No máximo 7 dias devem ser livres.'],
  },

  experienceWithHealthy: {
    type: String,
    trim: true,
    required: true,
  },

  didParticipate: {
    type: Boolean,
    required: true,
  },

  numberOfParticipation: {
    type: Number,
    required: true,
    min: [0, 'O número de participações precisa ser igual ou maior que 0'],
  },

  howDidKnowOfSDR: {
    type: String,
    required: true,
  },
}, {
  timestamps: false,
  strict: false,
});

const VolunteerModel: Model<IVolunteerSchema> = model<IVolunteerSchema>('Volunteer', schema, 'volunteers');

export default VolunteerModel;
