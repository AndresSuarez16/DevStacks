import { Router } from 'express';
import * as Projects from '../controllers/projects.controller.js';
import { Admin } from '../middlewares/Admin.middleware.js';
import { Check } from '../middlewares/token.middleware.js';

const router = Router();

router.get('/', Projects.AllProjects);

router.post('/New', Projects.CreateProject);

router.post('/Objectives/:id', Projects.Objectives);

router.put('/UpdateState/:id', Users.UpdateState);

router.put('/UpdatePhase/:id', Users.UpdatePhase);

export default router;