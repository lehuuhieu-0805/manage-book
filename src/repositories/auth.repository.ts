import { User } from './../components/user/user.entity';
import { Injectable } from '@nestjs/common';
import { SignUpDto } from './../components/auth/dto/signUp.dto';
import { IAuthRepository } from './../components/auth/interface/auth.repository.interface';
import { BaseAbstractRepository } from './base/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthRepository
  extends BaseAbstractRepository<User>
  implements IAuthRepository
{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }

  async signUp(signUpDto: SignUpDto): Promise<User> {
    const user = new User();
    user.username = signUpDto.username;
    user.password = signUpDto.password;
    return await this.userRepository.save(user);
  }
}
