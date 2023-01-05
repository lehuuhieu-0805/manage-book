import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserServiceInterface } from './interface/user.service.interface';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  // We request Nest inject the provider into our controller.
  constructor(
    @Inject('UserServiceInterface')
    private readonly userService: UserServiceInterface,
  ) {}

  @Post()
  async create(@Body() userDto: CreateUserDto): Promise<User> {
    return await this.userService.create(userDto);
  }
}
