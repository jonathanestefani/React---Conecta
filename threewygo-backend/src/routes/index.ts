import { Router } from 'express';
import CourseRouter from './Course';

const routes = Router();

routes.get('/', (_req, res) => {
  res.send('Bem-vindo ao projeto de cursos');
});
routes.use('/courses', CourseRouter);

export default routes;
