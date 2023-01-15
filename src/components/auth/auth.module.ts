import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './../../constants/common';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from './../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AUTH_SERVICE } from './interface/auth.service.interface';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: AUTH_SERVICE,
      useClass: AuthService,
    },
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AuthModule {}
