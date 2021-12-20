/* eslint-disable no-unused-vars */
import { v4 as uuidv4 } from 'uuid';

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

  public readonly createdAt?: number;

  public readonly updatedAt?: number;

  public fullName?: string;

  public email?: string;

  public cellphoneNumberWithDDD?: string;

  public occupation?: OccupationOptions | IOccupationsOptions;

  public expertise?: string;

  // Utilizando undefined para não salvar o campo como [] no mongodb
  public listFreeDaysOfWeek?: Array<FreeDaysOfWeek> | undefined;

  public numberOfFreeDaysOfWeek?: number;

  public experienceWithHealthy?: string;

  public didParticipate?: boolean;

  public numberOfParticipation?: number;

  public howDidknowOfSDR?: string;

  constructor(
    props: Omit<Volunteer, '_id' | 'createdAt' | 'updatedAt' | 'listFreeDaysOfWeek' >,
    _id?: string,
    createdAt?: number,
    updatedAt?: number,
    listFreeDaysOfWeek?: Array<FreeDaysOfWeek> | undefined,
  ) {
    Object.assign(this, props);

    // eslint-disable-next-line no-underscore-dangle
    if (!_id) this._id = uuidv4();

    if (!createdAt) this.createdAt = Date.now();

    if (!updatedAt) this.updatedAt = Date.now();

    if (listFreeDaysOfWeek) this.numberOfFreeDaysOfWeek = this.listFreeDaysOfWeek.length;
  }
}

export {
  Volunteer, FreeDaysOfWeek, OccupationOptions, IOccupationsOptions,
};
