import request from 'supertest';
import express from 'express';
import App from '../../src/app';
import { OccupationOptions, FreeDaysOfWeek } from '../../src/entities/Volunteer';

describe('Create volunteer Controller', () => {
  let app: express.Application;

  beforeAll(() => {
    app = new App().app;
  });

  it('should able to create a new volunteer', async () => {
    const volunteerData = {
      fullName: 'Lore Ipsum',
      email: 'createVolunteerIntegrationTEST@gmail.com',
      cellphoneNumberWithDDD: '(81) 99999-99999',
      occupation: OccupationOptions.MEDICO,
      expertise: 'Lore Ipsum',
      listFreeDaysOfWeek: [
        FreeDaysOfWeek.QUARTA,
        FreeDaysOfWeek.QUINTA,
      ],
      experienceWithHealthy: 'Lorem Ipsum',
      didParticipate: false,
      numberOfParticipation: 0,
      howDidKnowOfSDR: 'Lorem Ipsum',

    };

    const response: request.Response = await request(app)
      .post('/create-volunteer')
      .send(volunteerData);

    expect(response.statusCode).toBe(200);
  });
});
