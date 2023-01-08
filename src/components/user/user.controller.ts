import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { IUserService, USER_SERVICE } from './interface/user.service.interface';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  // We request Nest inject the provider into our controller.
  // Now when we want to inject USER SERVICE we can use the @Inject decorator and provide our token so that the dependency injector knows what implementation to inject
  constructor(
    @Inject(USER_SERVICE)
    private readonly userService: IUserService,
  ) {}

  @Post()
  async create(@Body() userDto: CreateUserDto): Promise<User> {
    return await this.userService.create(userDto);
  }
}
