import { IRepository } from '../interfaces/IRepository';
import { AbstractDto } from './AbstractDto';
import { IRequest } from '../interfaces/IRequest';
import { EMethod } from '../enum/EMethod';
import { AbstractUseCases } from './AbstractUseCases';

export abstract class AbstractUseCasePut extends AbstractUseCases {
  
  constructor(repository: IRepository | IRepository, data: Partial<AbstractDto> | BigInt | IRequest) {
    super(repository, data);
    this.method = EMethod.UPDATE;
  }

  public async execute() {
    try {
        await this.validation();
    } catch (error) {
        throw error;
    }

    return await this.repository.update(this.data);
  }

}
