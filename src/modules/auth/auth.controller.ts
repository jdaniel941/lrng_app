import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserDto } from '../../dto/user.dto';
import { RegisterUserDto } from '../../dto/registerUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Req() user: RegisterUserDto) {
    return this.authService.register(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() user: UserDto) {
    return this.authService.login(user);
  }
}
