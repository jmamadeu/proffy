import express from 'express';

import ClassController from './controllers/ClassController';
import ConnectionController from './controllers/ConnectionController';

const routes = express.Router();

const classController = new ClassController();
const connectionController = new ConnectionController();

routes.get('/classes', classController.index);
routes.post('/classes', classController.create);

routes.get('/connections', connectionController.index);
routes.post('/connections', connectionController.create);

export default routes;
