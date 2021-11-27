import { Router } from 'express';
import * as Projects from '../controllers/projects.controller.js';
import { Admin } from '../middlewares/Admin.middleware.js';
import { Leader } from '../middlewares/Leader.middleware.js';

const router = Router();

router.get('/', Admin, Projects.AllProjects);

router.post('/New', Leader, Projects.CreateProject);

router.post('/Objectives/:id', Projects.Objectives);

router.put('/UpdateState/:id', Projects.UpdateState);

router.put('/UpdatePhase/:id', Projects.UpdatePhase);

export default router;