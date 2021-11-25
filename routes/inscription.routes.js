import { Router } from 'express';
import * as Inscriptions from '../controllers/inscription.controller.js';
import { Admin } from '../middlewares/Admin.middleware.js';
import { Check } from '../middlewares/token.middleware.js';

const router = Router();

router.get('/', Inscriptions.AllInscriptions);

router.post('/New/:id', Inscriptions.CreateInscription);

/**router.post('/Login', Users.Login);

router.put('/Update/:id', Check, Users.UpdateUsers);

router.delete('/Delete/:id', Admin, Users.DeleteUsers);**/

export default router;