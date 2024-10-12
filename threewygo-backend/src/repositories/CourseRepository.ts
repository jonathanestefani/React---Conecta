import { Course } from "../models/Course";
import { AbstractRepository } from "../depencies";

export class CourseRepository extends AbstractRepository {
    protected model: any = Course;
}