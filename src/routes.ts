import { Router } from 'express';
import { createVolunteerController } from '@useCases/createVolunteer';
import { createFormController } from '@useCases/createForm';
import CreateUserValidation from '@utils/validations/CreateUserValidation';

const router = Router();

router.post(
  '/create-volunteer',
  (request, response, next) => {
    // Má prática? Dee-se armazenar numa variável e fazer a chamada da função?
    // Poderia colocar dentro do construtor o conteúdo da função?
    new CreateUserValidation(request, response, next).validateInput();
  },
  (request, response) => {
    createVolunteerController.handle(request, response);
  },
);

router.post('/submit-form', (request, response) => {
  createFormController.handle(request, response);
});

export default router;
