import { Router } from 'express';
import * as Projects from '../controllers/projects.controller.js';
import { Admin } from '../middlewares/Admin.middleware.js';
import { Check } from '../middlewares/token.middleware.js';

const router = Router();

router.get('/', Projects.AllProjects);

router.post('/New', Projects.CreateProject);

router.post('/Objectives/:id', Projects.Objectives);

router.put('/UpdateState/:id', Projects.UpdateState);

router.put('/UpdatePhase/:id', Projects.UpdatePhase);

export default router;