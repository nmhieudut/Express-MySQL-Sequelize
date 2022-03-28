import { UserController } from 'controllers/user';
import express from 'express';

const router = express.Router();

router.get('/', UserController.getAll);

export default router;
