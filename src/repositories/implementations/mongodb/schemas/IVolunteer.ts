import { FreeDaysOfWeek, OccupationOptions, IOccupationsOptions } from '@entities/Volunteer';

interface IVolunteer {
    _id: string,

    fullName: string,

    email: string,

    cellphoneNumberWithDDD: string,

    occupation: OccupationOptions | IOccupationsOptions,

    expertise: string,

    listfreeDaysOfWeek: Array<FreeDaysOfWeek>,

    numberOfFreeDaysOfWeek: number,

    experienceWithHealthy: string,

    didParticipate: boolean,

    numberOfParticipation: number,

    howDidknowOfSDR: string
}

// Pega as opções dos enums que vêm da entidade Volunteer
// Precisa disso para poder instanciar dentro do tipo enum no Schema
const listEnumOccupation: Array<string> = Object.values(OccupationOptions);

const listEnumFreeDays: Array<string> = Object.values(FreeDaysOfWeek);

export { IVolunteer, listEnumOccupation, listEnumFreeDays };
