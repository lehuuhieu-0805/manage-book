import { IJwtPayload } from './jwtPayload.interface';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../user/user.entity';
import {
  IUserRepository,
  USER_REPOSITORY,
} from './../user/interface/user.repository.interface';
import { SignInDto } from './dto/signIn.dto';
import { SignUpDto } from './dto/signUp.dto';
import { IAuthService } from './interface/auth.service.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userRepository.getUserByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async signIn(signInDto: SignInDto): Promise<{ access_token: string }> {
    const user = await this.userRepository.getUserByUsername(
      signInDto.username,
    );
    const payload: IJwtPayload = { username: user.username };
    return { access_token: this.jwtService.sign(payload) };
  }

  async signUp(signUpDto: SignUpDto): Promise<User> {
    try {
      const saltRounds = 10;
      signUpDto.password = await bcrypt.hash(signUpDto.password, saltRounds);

      const user = new User();
      user.username = signUpDto.username;
      user.password = signUpDto.password;

      return this.userRepository.create(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
