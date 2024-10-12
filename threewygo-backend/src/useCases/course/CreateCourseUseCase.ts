import { ValidationRequired } from "./validators/ValidationRequired";
import { IValidations } from "../../depencies";
import { AbstractUseCasePost } from "../../abstract/AbstractUseCasePost";

export class CreateCourseUseCase extends AbstractUseCasePost {
    protected validations: IValidations[] = [
        new ValidationRequired,
    ];
}