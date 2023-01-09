import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { IUserService, USER_SERVICE } from './interface/user.service.interface';
import { User } from './user.entity';

@Controller('users')
@ApiTags('User')
export class UserController {
  // We request Nest inject the provider into our controller.
  // Now when we want to inject USER SERVICE we can use the @Inject decorator and provide our token so that the dependency injector knows what implementation to inject
  constructor(
    @Inject(USER_SERVICE)
    private readonly userService: IUserService,
  ) {}

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Find user by id successfully' })
  async findById(@Param('id') id: string): Promise<User> {
    return await this.userService.findById(id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Create a user successfully' })
  async create(@Body() userDto: CreateUserDto): Promise<User> {
    return await this.userService.create(userDto);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Update a user successfully' })
  async update(
    @Param('id') id: string,
    @Body() userDto: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.update(id, userDto);
  }
}
