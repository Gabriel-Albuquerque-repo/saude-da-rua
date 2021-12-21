/* eslint-disable no-unused-vars */
import { v4 as uuidv4 } from 'uuid';

enum OccupationOptions {
  MEDICO = 'MÉDICO(A)',

  ENFERMEIRO = 'ENFERMEIRO(A)',

  FARMACEUTICO = 'FARMACÊUTICO(A)',

  ESTUDANTE_MEDICINA = 'ESTUDANTE DE MEDICINA',

  ESTUDANTE_ENFERMAGEM = 'ESTUDANTE DE ENFERMAGEM',
}

enum FreeDaysOfWeek {
    DOMINGO = 'DOMINGO',

    SEGUNDA = 'SEGUNDA',

    TERCA = 'TERÇA',

    QUARTA = 'QUARTA',

    QUINTA = 'QUINTA',

    SEXTA = 'SEXTA',

    SABADO = 'SÁBADO',
}

class Volunteer {
  public readonly _id?: string;

  public readonly createdAt?: number;

  public readonly updatedAt?: number;

  public fullName?: string;

  public email?: string;

  public cellphoneNumberWithDDD?: string;

  public occupation?: OccupationOptions | string;

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

export { Volunteer, FreeDaysOfWeek, OccupationOptions };
