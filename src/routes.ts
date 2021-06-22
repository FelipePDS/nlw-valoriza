import { Router } from 'express';

const router = Router();

import { CreateUserController } from './controllers/CreateUserController';

const createUserController = new CreateUserController();

router.post('/users', createUserController.handle);

export { router };
