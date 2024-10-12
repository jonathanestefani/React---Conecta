import { AbstractUseCaseGet } from '../../abstract/AbstractUseCaseGet';
import { DateRange, StringLike, TFilter } from '../../depencies';

export class GetCourseUseCase extends AbstractUseCaseGet {
    protected filters: TFilter = {
        "title": new StringLike("title"),
        "description": new StringLike("description"),
        "date": new DateRange("date")
    };
}