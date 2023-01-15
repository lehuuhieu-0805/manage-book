import { USER_REPOSITORY } from './interface/user.repository.interface';
import { USER_SERVICE } from './interface/user.service.interface';
import { UserRepository } from './../../repositories/user.repository';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  // We register the provider with the Nest Ioc container
  providers: [
    {
      // USER_SERVICE is the name token to inject
      provide: USER_SERVICE,
      // UserService is the class that implements the IUserService interface
      useClass: UserService,
    },
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
  controllers: [UserController],
  exports: [USER_REPOSITORY],
})
export class UserModule {}
