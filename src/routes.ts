import { Router } from 'express';
import createVolunteerController from '@useCases/createVolunteer';

// implementar utils/validações
const router = Router();

router.post('/create', createVolunteerController.handle);

export default router;
