import { AuthRepository } from './../../repositories/auth.repository';
import { AUTH_REPOSITORY } from './interface/auth.repository.interface';
import { User } from './../user/user.entity';
import { AUTH_SERVICE } from './interface/auth.service.interface';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    {
      provide: AUTH_SERVICE,
      useClass: AuthService,
    },
    {
      provide: AUTH_REPOSITORY,
      useClass: AuthRepository,
    },
  ],
})
export class AuthModule {}
