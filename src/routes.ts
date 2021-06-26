import { Router } from 'express';

const router = Router();

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';

import { ListComplimentsByUserReceiverController } from './controllers/ListComplimentsByUserReceiverController';
import { ListComplimentsByUserSenderController } from './controllers/ListComplimentsByUserSenderController';
import { ListUsersController } from './controllers/ListUsersController';
import { ListTagsController } from './controllers/ListTagsController';

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

const listComplimentsByUserReceiverController = new ListComplimentsByUserReceiverController();
const listComplimentsByUserSenderController = new ListComplimentsByUserSenderController();
const listUsersController = new ListUsersController();
const listTagsController = new ListTagsController();

import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

router.post('/users', createUserController.handle);
router.get('/users', ensureAuthenticated, listUsersController.handle);

router.post('/login', authenticateUserController.handle);

router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get('/tags', ensureAuthenticated, listTagsController.handle);

router.post('/compliments', ensureAuthenticated, createComplimentController.handle);

router.get(
  '/users/compliments/receive', 
  ensureAuthenticated, 
  listComplimentsByUserReceiverController.handle
);
router.get(
  '/users/compliments/send', 
  ensureAuthenticated, 
  listComplimentsByUserSenderController.handle
);

export { router };
