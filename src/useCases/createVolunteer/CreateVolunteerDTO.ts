import { FreeDaysOfWeek, OccupationOptions, IOccupationsOptions } from '@entities/Volunteer';

interface ICreateVolunteerRequestDTO {

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

export default ICreateVolunteerRequestDTO;
