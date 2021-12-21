import { FreeDaysOfWeek, OccupationOptions } from '@entities/Volunteer';

interface IVolunteerSchema {
    _id: string,

    createdAt: Date,

    updatedAt: Date,

    fullName: string,

    email: string,

    cellphoneNumberWithDDD: string,

    occupation: OccupationOptions | string,

    expertise: string,

    listFreeDaysOfWeek?: Array<FreeDaysOfWeek> | undefined,

    numberOfFreeDaysOfWeek?: number,

    experienceWithHealthy: string,

    didParticipate: boolean,

    numberOfParticipation: number,

    howDidKnowOfSDR?: string
}

// Pega as opções dos enums que vêm da entidade Volunteer
// Precisa disso para poder instanciar dentro do tipo enum no Schema
const listEnumOccupation: Array<string> = Object.values(OccupationOptions);

const listEnumFreeDays: Array<string> = Object.values(FreeDaysOfWeek);

export { IVolunteerSchema, listEnumOccupation, listEnumFreeDays };
