import { ICourse } from "../interfaces/Course/ICourse";
import { AbstractDto } from "../depencies";

export class CourseDTO extends AbstractDto {
  protected data: ICourse;

  constructor(data: ICourse) {
    super(data);
    this.data = data;
  }

  get(): ICourse {
    return this.data;
  }
}