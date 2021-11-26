import Express from 'express';
import Cors from 'cors';
import dotenv from 'dotenv';
import config from './config.js';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import conectarBD from './database.js';
import UsersRoutes from './routes/users.routes.js';
import ProjectsRoutes from './routes/projects.routes.js';
import InscriptionRoutes from './routes/inscription.routes.js';
import * as options from './utils/swagger.js';

dotenv.config();

const port = 5000;
const swaggerSpecs = swaggerJSDoc(options.swaggerOptions);
const app = Express();

app.use(Express.json());
app.use(Cors());
app.use('/api', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
app.use('/users', UsersRoutes);
app.use('/projects', ProjectsRoutes);
app.use('/inscriptions', InscriptionRoutes);

app.listen({ port }, async () => {
  await conectarBD();

  console.log('Listening on Port: ', port);
});

export default app;

