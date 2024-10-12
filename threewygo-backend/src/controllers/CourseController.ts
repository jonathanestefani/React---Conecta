import { Request, Response } from 'express';
import { ErrorCustomization } from '../depencies';

import { CourseRepository } from '../repositories/CourseRepository';
import { CourseDTO } from '../dto/Course.dto';
import { SendResponse } from './SendResponse';
import { Course } from '../models/Course';

import { GetCourseUseCase } from '../useCases/course/GetCourseUseCase';
import { CreateCourseUseCase } from '../useCases/course/CreateCourseUseCase';
import { UpdateCourseUseCase } from '../useCases/course/UpdateCourseUseCase';
import { DeleteCourseUseCase } from '../useCases/course/DeleteCourseUseCase';

export const getCourse = async (
  request: Request,
  response: Response,
): Promise<Course[] | any> => {
  try {
    const data: any = await new GetCourseUseCase(
      new CourseRepository(),
      request.query,
    ).execute();
    return SendResponse(response, data, 200);
  } catch (validation: any) {
    if (validation instanceof ErrorCustomization) {
      return SendResponse(response, validation.getMessages(), 422);
    } else return SendResponse(response, [], 422);
  }
};

export const getByIdCourse = async (
  request: Request,
  response: Response,
): Promise<Course[] | any> => {
  try {
    const id: BigInt = BigInt(request.params.courseId);
    const data: any = await new GetCourseUseCase(
      new CourseRepository(),
      id,
    ).execute();
    return SendResponse(response, data, 200);
  } catch (validation: any) {
    if (validation instanceof ErrorCustomization) {
      return SendResponse(response, validation.getMessages(), 422);
    } else return SendResponse(response, [], 422);
  }
};

export const createCourse = async (
  request: Request,
  response: Response,
): Promise<Course | any> => {
  try {
    const course = await (new CreateCourseUseCase(
      new CourseRepository(),
      new CourseDTO({ ...request.body }),
    )).execute();
    return SendResponse(response, course, 201);
  } catch (validation: any) {
    if (validation instanceof ErrorCustomization) {
      return SendResponse(response, validation.getMessages(), 422);
    } else {
      console.log(validation);
      return SendResponse(response, [], 422);
    }
  }
};

export const updateCourse = async (
  request: Request,
  response: Response,
): Promise<Course | any> => {
  try {
    const course = await new UpdateCourseUseCase(
      new CourseRepository(),
      new CourseDTO({ ...request.body, id: request.params.courseId }),
    ).execute();
    return SendResponse(response, course, 201);
  } catch (validation: any) {
    if (validation instanceof ErrorCustomization) {
      return SendResponse(response, validation.getMessages(), 422);
    } else return SendResponse(response, [], 422);
  }
};

export const deleteCourse = async (
  request: Request,
  response: Response,
): Promise<any> => {
  try {
    await new DeleteCourseUseCase(
      new CourseRepository(),
      BigInt(request.params.courseId),
    ).execute();
    return SendResponse(response, [], 204);
  } catch (validation: any) {
    if (validation instanceof ErrorCustomization) {
      return SendResponse(response, validation.getMessages(), 422);
    } else return SendResponse(response, [], 422);
  }
};
