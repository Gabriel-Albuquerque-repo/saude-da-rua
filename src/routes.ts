import { Router } from 'express';
import { createVolunteerController } from '@useCases/createVolunteer';

// implementar utils/validações
const router = Router();

router.post('/create', (request, response) => {
  createVolunteerController.handle(request, response);
});

export default router;
