import { IFilters } from '../interfaces/IFilters';

export class StringLike implements IFilters {
  private field: string = '';

  constructor(field: string) {
    this.field = field;
  }

  public execute(builder: any, value: any): Promise<any> {
    const query = builder.getQuery();
    const hasWhereClause = query.toLowerCase().includes('where');

    if (hasWhereClause) {
      return builder.andWhere(`${this.field} ILIKE :${this.field}`, {
        [this.field]: `%${value}%`,
      });
    }

    return builder.where(`${this.field} ILIKE :${this.field}`, {
      [this.field]: `%${value}%`,
    });
  }
}
