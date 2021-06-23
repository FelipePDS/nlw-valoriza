import { Router } from 'express';

const router = Router();

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

import { ensureAdmin } from './middlewares/ensureAdmin';

router.post('/users', createUserController.handle);

router.post('/tags', ensureAdmin, createTagController.handle);

export { router };
