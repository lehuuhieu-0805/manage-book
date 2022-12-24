import { User } from './../user.entity';
import { BaseInterfaceRepository } from './../../../repositories/base/base.interface.repository';

export interface UserRepositoryInterface extends BaseInterfaceRepository<User> {}
