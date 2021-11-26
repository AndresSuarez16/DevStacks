import { Router } from 'express';
import * as Users from '../controllers/users.controller.js';
import { Admin } from '../middlewares/Admin.middleware.js';
import { Check } from '../middlewares/token.middleware.js';

const router = Router();

router.get('/', Admin, Users.AllUsers);

router.post('/New', Users.CreateUser);

router.post('/Login', Users.Login);

router.put('/Update', Check, Users.UpdateUsers);

router.put('/UpdateState', Check, Users.UpdateState);

router.delete('/Delete/:id', Admin, Users.DeleteUsers);

export default router;