import { Router } from 'express';
import * as controllers from '../../controllers/users.controllers';
import authenticationMiddleware from '../../middleware/authentication.middleware';

const routes = Router();
// api/users
routes
  .route('/signup')
  .get(authenticationMiddleware, controllers.getMany)
  .post(controllers.create);
routes
  .route('/:id')
  .get(authenticationMiddleware, controllers.getOne)
  .patch(authenticationMiddleware, controllers.updateOne)
  .delete(authenticationMiddleware, controllers.deleteOne);

// authentication
routes.route('/login').post(controllers.authenticate);

export default routes;
