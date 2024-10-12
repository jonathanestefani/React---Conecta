import { ValidationRequired } from "./validators/ValidationRequired";
import { IValidations } from "../../depencies";
import { AbstractUseCasePut } from "../../abstract/AbstractUseCasePut";

export class UpdateCourseUseCase extends AbstractUseCasePut {
    protected validations: IValidations[] = [
        new ValidationRequired,
    ];
}