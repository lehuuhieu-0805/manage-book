import { IBaseRepository } from './../../../repositories/base/base.interface.repository';
import { User } from './../../user/user.entity';
import { SignUpDto } from './../dto/signUp.dto';

export const AUTH_REPOSITORY = 'AUTH REPOSITORY';

export interface IAuthRepository extends IBaseRepository<User> {
  signUp(signUpDto: SignUpDto): Promise<User>;
}
