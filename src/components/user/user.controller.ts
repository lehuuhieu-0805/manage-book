import { User } from './user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { Controller, Inject, Post, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(
    @Inject('UserServiceInterface')
    private readonly userService: UserService,
  ) {}

  @Post()
  async create(@Body() userDto: CreateUserDto): Promise<User> {
    return await this.userService.create(userDto);
  }
}
