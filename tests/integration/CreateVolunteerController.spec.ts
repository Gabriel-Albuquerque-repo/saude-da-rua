import request from 'supertest';
import express from 'express';
import App from '../../src/app';
import mongoInMemory from '../../testRepositories/mongodbIn-memory/MongoConnectionInMemory';
import { OccupationOptions, FreeDaysOfWeek } from '../../src/entities/Volunteer';

describe('Create volunteer Controller', () => {
  let app: express.Application;

  beforeAll(async () => {
    app = new App().app;

    await mongoInMemory.connect();
  });

  afterAll(async () => {
    await mongoInMemory.close();
  });

  it('should able to create a new volunteer', async () => {
    const volunteerData = {
      fullName: 'Lore Ipsum',
      email: 'createVolunteerIntegrationTEST@gmail.com',
      cellphoneNumberWithDDD: '(81) 99999-9999',
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

    expect(response.statusCode).toBe(201);

    // const response2: request.Response = await request(app)
    //   .post('/create-volunteer')
    //   .send(volunteerData);

    // expect(response2.statusCode).toBe(200);
    // expect(response2.body.ErrorMessage).toEqual(
    // 'Volunteer already exists / Voluntário já existe'
    // );
  });
});
