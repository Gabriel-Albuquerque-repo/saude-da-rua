/* eslint-disable semi */
// eslint-disable-next-line import/no-unresolved
import { FreeDaysOfWeek, OccupationOptions, IOccupationsOptions } from '@entities/Volunteer';

export default interface ICreateVolunteerRequestDTO {
    fullName: string,

    email: string,

    cellphoneNumberWithDDD: string,

    occupation: OccupationOptions | IOccupationsOptions,

    expertise: string,

    listfreeDaysOfWeek: Array<FreeDaysOfWeek>,

    experienceWithHealthy: string,

    didParticipate: boolean,

    numberOfParticipation: number,

    howDidKnowOfSDR: string,
}
