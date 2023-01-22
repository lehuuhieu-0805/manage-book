import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './../../constants/common';
import { UserRepository } from './../../repositories/user.repository';
import { USER_REPOSITORY } from './../user/interface/user.repository.interface';
import { User } from './../user/user.entity';
import { IJwtPayload } from './jwtPayload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: IJwtPayload) {
    const user: User = await this.userRepository.getUserByUsername(
      payload.username,
    );

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
