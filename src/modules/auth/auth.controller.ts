import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { LoginUserDto } from "../../dto/loginUser.dto";
import { RegisterUserDto } from "../../dto/registerUser.dto";

@Controller("api/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  async register(@Body() user: RegisterUserDto) {
    return this.authService.register(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Body() user: LoginUserDto) {
    return this.authService.login(user);
  }
}
