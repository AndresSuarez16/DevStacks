import Express from 'express';
import Cors from 'cors';
import dotenv from 'dotenv';
import config from './config.js';
import conectarBD from './database.js';
import UsersRoutes from './routes/users.routes.js';
import ProjectsRoutes from './routes/projects.routes.js';
import InscriptionRoutes from './routes/inscription.routes.js';

dotenv.config();

const port = 5000;
const app = Express();

app.use(Express.json());
app.use(Cors());
app.use('/users', UsersRoutes);
app.use('/projects', ProjectsRoutes);
app.use('/inscriptions', InscriptionRoutes);

app.listen({ port }, async () => {
  await conectarBD();

  console.log('Listening on Port: ', port);
});

export default app;

