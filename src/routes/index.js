import express from 'express';
import userRoute from './user';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/users',
    route: userRoute
  },
  {
    path: '/auth',
    route: () => {
      console.log('kkkk');
    }
  }
];

defaultRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
