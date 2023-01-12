import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './../user/user.entity';
import { SignUpDto } from './dto/signUp.dto';
import { AUTH_SERVICE, IAuthService } from './interface/auth.service.interface';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE)
    private readonly authService: IAuthService,
  ) {}

  @Post('/signup')
  @ApiResponse({ status: 201, description: 'Sign up successfully' })
  async signUp(@Body() signUpDto: SignUpDto): Promise<User> {
    return await this.authService.signUp(signUpDto);
  }
}
