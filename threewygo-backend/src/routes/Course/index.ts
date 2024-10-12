import { Router } from 'express';
import { asyncHandler } from '../../depencies';
import {
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  getByIdCourse
} from '../../controllers/CourseController';

const CourseRouter = Router();

CourseRouter.get('/',
  asyncHandler(getCourse)
);
CourseRouter.get('/:courseId(\\d+)',
  asyncHandler(getByIdCourse)
);
CourseRouter.post(
  '/',
  asyncHandler(createCourse),
);
CourseRouter.put(
  '/:courseId(\\d+)',
  asyncHandler(updateCourse),
);
CourseRouter.delete(
  '/:courseId(\\d+)',
  asyncHandler(deleteCourse),
);

export default CourseRouter;
