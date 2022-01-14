import { Router } from 'express';
import { createVolunteerController } from '@useCases/createVolunteer';
import { createFormController } from '@useCases/createForm';
import CreateVolunteerValidation from '@utils/validations/CreateVolunteerValidation';

const router = Router();

router.post(
  '/create-volunteer',
  (request, response, next) => {
    new CreateVolunteerValidation(request, response, next).validateInput();
  },
  (request, response) => {
    createVolunteerController.handle(request, response);
  },
);

router.post('/submit-form', (request, response) => {
  createFormController.handle(request, response);
});

export default router;
