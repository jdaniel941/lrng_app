import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthService } from "./auth/auth.service";
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("auth/register")
  async register(@Req() req) {
    console.log(req.body);
    return this.authService.register(req.body);
  }

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Req() req) {
    return req.user;
  }
}
