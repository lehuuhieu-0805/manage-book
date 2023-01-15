import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './../user/user.entity';
import { SignInDto } from './dto/signIn.dto';
import { SignUpDto } from './dto/signUp.dto';
import { GetUser } from './getUser.decorator';
import { AUTH_SERVICE, IAuthService } from './interface/auth.service.interface';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

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

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  @ApiResponse({ status: 200, description: 'Sign in successfully' })
  async signIn(
    @Body() signInDto: SignInDto,
  ): Promise<{ access_token: string }> {
    return await this.authService.signIn(signInDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/profile')
  async profile(@GetUser() user): Promise<any> {
    return user;
  }
}
