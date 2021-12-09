import { Router } from 'express';
import { createVolunteerController } from '@useCases/createVolunteer';
import { createFormController } from '@useCases/createForm';

// implementar utils/validações
const router = Router();

router.post('/create-volunteer', (request, response) => {
  createVolunteerController.handle(request, response);
});

router.post('/submit-form', (request, response) => {
  createFormController.handle(request, response);
});

export default router;
