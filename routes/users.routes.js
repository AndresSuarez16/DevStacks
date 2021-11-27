import { Router } from 'express';
import * as Users from '../controllers/users.controller.js';
import { Admin } from '../middlewares/Admin.middleware.js';
import { Leader } from '../middlewares/Leader.middleware.js';
import { Role } from '../middlewares/Role.middleware.js';
//import { Check } from '../middlewares/token.middleware.js';

const router = Router();

router.get('/', Admin, Leader, Users.AllUsers);

router.post('/New', Users.CreateUser);

router.post('/Login', Users.Login);

router.put('/UpdateData/:id', Role, Users.UpdateUsers);

router.put('/UpdateState/:id', Leader, Admin, Users.UpdateState);

router.delete('/Delete/:id', Admin, Users.DeleteUsers);

export default router;