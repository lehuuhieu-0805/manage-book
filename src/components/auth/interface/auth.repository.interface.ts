import { IBaseRepository } from './../../../repositories/base/base.interface.repository';
import { User } from './../../user/user.entity';

export const AUTH_REPOSITORY = 'AUTH REPOSITORY';

export interface IAuthRepository extends IBaseRepository<User> {}
