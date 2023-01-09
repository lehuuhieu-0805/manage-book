import { CreateUserDto } from './../dto/createUser.dto';
import { UpdateUserDto } from './../dto/updateUser.dto';
import { User } from './../user.entity';

// Since JavaScript doesn’t support/understand interfaces, when we compile down our TypeScript to JavaScript our interfaces no longer exist
// To use dependency injection with interfaces we need to create a token to associate with an interface and provide that token when injecting to an interface type
export const USER_SERVICE = 'USER SERVICE';

export interface IUserService {
  create(userDto: CreateUserDto): Promise<User>;
  findById(id: string): Promise<User>;
  update(id: string, userDto: UpdateUserDto): Promise<User>;
}
