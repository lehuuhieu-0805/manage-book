import { User } from './../../user/user.entity';
import { SignUpDto } from './../dto/signUp.dto';

export const AUTH_SERVICE = 'AUTH SERVICE';

export interface IAuthService {
  signUp(signUpDto: SignUpDto): Promise<User>;
}
