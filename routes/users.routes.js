import { Router } from 'express';
import * as Users from '../controllers/users.controller.js';
import { Admin } from '../middlewares/Admin.middleware.js';
import { Leader } from '../middlewares/Leader.middleware.js';
import { NoAdmin } from '../middlewares/NoAdmin.middleware.js';
import { NoStudent } from '../middlewares/NoStudent.middleware.js';

const router = Router();

router.get('/', NoStudent, Users.AllUsers);

router.post('/New', Users.CreateUser);

router.post('/Login', Users.Login);

router.put('/UpdateData/:id', NoAdmin, Users.UpdateUsers);

router.put('/UpdateState/:id', NoStudent, Users.UpdateState);

router.delete('/Delete/:id', Admin, Users.DeleteUsers);

export default router;