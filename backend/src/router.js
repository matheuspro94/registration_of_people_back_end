import { Router } from 'express';
import UserController from './app/controllers/UserController';
const routes = new Router();

routes.post('/users', UserController.register);
routes.get('/users/:id', UserController.read);

export default routes;
