import { Router } from 'express';

const router = Router();

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

import { ensureAdmin } from './middlewares/ensureAdmin';

router.post('/users', createUserController.handle);

router.post('/login', authenticateUserController.handle);

router.post('/tags', ensureAdmin, createTagController.handle);

router.post('/compliments', createComplimentController.handle);

export { router };
