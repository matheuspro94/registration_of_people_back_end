const { Router } = require('express');
const UserController = require('./Api/controllers/UserController');
const routes = new Router();

routes.get('/cities/:uf', UserController.getCidades)

routes.post('/users', UserController.register);
routes.get('/users/:id', UserController.read);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);
routes.get('/users', UserController.listAllUsers);

module.exports = routes;
