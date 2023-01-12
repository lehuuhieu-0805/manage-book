import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IAuthRepository } from './../components/auth/interface/auth.repository.interface';
import { User } from './../components/user/user.entity';
import { BaseAbstractRepository } from './base/base.abstract.repository';

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
}
