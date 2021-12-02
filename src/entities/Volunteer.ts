/* eslint-disable no-unused-vars */
import { uuid } from 'uuidv4';

enum OccupationOptions {
  occupation_1 = 'MÉDICO(A)',

  occupation_2 = 'ENFERMEIRO(A)',

  occupation_3 = 'FARMACÊUTICO(A)',

  occupation_4 = 'ESTUDANTE DE MEDICINA',

  occupation_5 = 'ESTUDANTE DE ENFERMAGEM',
}

enum FreeDaysOfWeek {
    weekDay_1 = 'DOMINGO',

    weekDay_2 = 'SEGUNDA',

    weekDay_3 = 'TERÇA',

    weekDay_4 = 'QUARTA',

    weekDay_5 = 'QUINTA',

    weekDay_6 = 'SEXTA',

    weekDay_7 = 'SÁBADO',
}

interface IOccupationsOptions {
    option6: string;
}

class Volunteer {
  public readonly _id?: string;

  public createdAt?: number;

  public updatedAt?: number;

  public fullName?: string;

  public email?: string;

  public cellphoneNumberWithDDD?: string;

  public occupation?: OccupationOptions | IOccupationsOptions;

  public expertise?: string;

  public listfreeDaysOfWeek?: Array<FreeDaysOfWeek>;

  public numberOfFreeDaysOfWeek?: number;

  public experienceWithHealthy?: string;

  public didParticipate?: boolean;

  public numberOfParticipation?: number;

  public howDidKnowOfSDR?: string;

  constructor(props: Omit<Volunteer, '_id' | 'createdAt'>, _id?: string, createdAt?: number) {
    Object.assign(this, props);

    if (!_id) {
      // eslint-disable-next-line no-underscore-dangle
      this._id = uuid();
    }

    if (!createdAt) {
      this.createdAt = Date.now();
    }

    this.numberOfFreeDaysOfWeek = this.listfreeDaysOfWeek.length;
  }
}

export {
  Volunteer, FreeDaysOfWeek, OccupationOptions, IOccupationsOptions,
};
