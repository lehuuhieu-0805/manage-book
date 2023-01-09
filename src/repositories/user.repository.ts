import { IUserRepository } from './../components/user/interface/user.repository.interface';
import { User } from './../components/user/user.entity';
import { Injectable } from '@nestjs/common';
import { BaseAbstractRepository } from './base/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository
  extends BaseAbstractRepository<User>
  implements IUserRepository
{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    // Sử dụng từ khóa super để tham chiếu trực tiếp đến biến instance của lớp cha gần nhất
    // Sử dụng từ khóa super để gọi đến phương thức của lớp cha gần nhất
    // Sử dụng super() để gọi trực tiếp constructor (hàm tạo) của lớp cha gần nhất
    super(userRepository);
  }
}
