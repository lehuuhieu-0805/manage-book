import { User } from './../user.entity';
import { IBaseRepository } from './../../../repositories/base/base.interface.repository';

export const USER_REPOSITORY = 'USER REPOSITORY';

export interface IUserRepository extends IBaseRepository<User> {}
