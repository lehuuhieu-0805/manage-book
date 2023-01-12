import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '../user/user.entity';
import { SignUpDto } from './dto/signUp.dto';
import {
  AUTH_REPOSITORY,
  IAuthRepository,
} from './interface/auth.repository.interface';
import { IAuthService } from './interface/auth.service.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(AUTH_REPOSITORY)
    private readonly authRepository: IAuthRepository,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<User> {
    try {
      const saltRounds = 10;
      signUpDto.password = await bcrypt.hash(signUpDto.password, saltRounds);
      return this.authRepository.signUp(signUpDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
