import { Schema, model, Model } from 'mongoose';
import { IVolunteerSchema, listEnumFreeDays, listEnumOccupation } from './interfaces/IVolunteerSchema';

// OBS.: Saber máximos e mínimos do tamanho de strings livres

const schema = new Schema<IVolunteerSchema>({
  _id: {
    type: String,
  },

  fullName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },

  cellphoneNumberWithDDD: {
    type: String,
    trim: true,
    required: true,
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

  listfreeDaysOfWeek: [
    {
      type: String,
      required: true,
      enum: listEnumFreeDays,
    },
  ],

  numberOfFreeDaysOfWeek: {
    type: Number,
    required: true,
    min: 1,
    max: 7,
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
    min: 0,
    max: 99,
  },

  howDidknowOfSDR: {
    type: String,
    // required: true,
  },
}, {
  timestamps: true,
  strict: false,
});

const VolunteerModel: Model<IVolunteerSchema> = model<IVolunteerSchema>('Volunteer', schema, 'volunteers');

export default VolunteerModel;
