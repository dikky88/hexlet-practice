import Router from 'express';
import userController from '../Controllers/userController.js';

const router = new Router();

router.get('/', userController);

export default router;
