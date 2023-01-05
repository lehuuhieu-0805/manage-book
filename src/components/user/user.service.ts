import { UserRepositoryInterface } from './interface/user.repository.interface';
import { UserServiceInterface } from './interface/user.service.interface';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './user.entity';

// Declare the UserService class as a class that can be managed by the Nest IoC container
// @Injectable() decorator sẽ giúp Nest biết rằng đây là 1 provider
@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}
  async create(userDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = userDto.username;
    user.password = userDto.password;
    return await this.userRepository.create(user);
  }
}
