import express, { request, response } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './Controllers/PointsController';
import ItemsController from './Controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', upload.single('image'), pointsController.create);

export default routes;
