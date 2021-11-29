import { uuid } from 'uuidv4';

const enum OccupationOptions {
    'MÉDICO(A)',
    'ENFERMEIRO(A)',
    'FARMACÊUTICO(A)',
    'ESTUDANTE DE MEDICINA',
    'ESTUDANTE DE ENFERMAGEM',
}

const enum FreeDaysOfWeek {
    'DOMINGO',
    'SEGUNDA',
    'TERÇA',
    'QUARTA',
    'QUINTA',
    'SEXTA',
    'SÁBADO',
}

interface IOccupationsOptions {
    option6?: string;
}

class Volunteer {
  public readonly id?: string;

  public createdAt?: number;

  public updatedAt?: number;

  public fullName?: string;

  public email?: string;

  public cellphoneNumberWithDDD?: string;

  public occupation?: OccupationOptions | IOccupationsOptions;

  public expertise?: string;

  public listfreeDaysOfWeek?: Array<FreeDaysOfWeek>;

  private numberOfFreeDaysOfWeek: number;

  public experienceWithHealthy?: string;

  public didParticipate?: boolean;

  public numberOfParticipation?: number;

  public howDidKnowOfSDR?: string;

  private assignFreeDaysOf(): void {
    this.numberOfFreeDaysOfWeek = this.listfreeDaysOfWeek.length;
  }

  constructor(props: Omit<Volunteer, 'id' | 'createdAt'>, id?: string, createdAt?: number) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }

    if (!createdAt) {
      this.createdAt = Date.now();
    }

    this.assignFreeDaysOf();
  }
}

export { Volunteer, FreeDaysOfWeek, OccupationOptions, IOccupationsOptions };
