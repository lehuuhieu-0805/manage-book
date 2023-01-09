import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
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

  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    return await this.userService.findById(id);
  }

  @Post()
  async create(@Body() userDto: CreateUserDto): Promise<User> {
    return await this.userService.create(userDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() userDto: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.update(id, userDto);
  }
}
