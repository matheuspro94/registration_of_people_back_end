import { Router } from 'express';
import UserController from './app/controllers/UserController';
const routes = new Router();

routes.post('/users', UserController.register);
routes.get('/users/:id', UserController.read);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);
routes.get('/users', UserController.listAllUsers);

export default routes;
