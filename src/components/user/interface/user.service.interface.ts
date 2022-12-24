import { User } from './../user.entity';
import { CreateUserDto } from './../dto/createUser.dto';

export interface UserServiceInterface {
  create(userDto: CreateUserDto): Promise<User>;
}
