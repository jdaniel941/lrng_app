import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from '../../dto/registerUser.dto';
import {LoginUserDto} from "../../dto/loginUser.dto";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.fetchUserByEmail(email)
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(userData: RegisterUserDto): Promise<any> {
    return await this.usersService.create(userData);
  }

  async login(user: LoginUserDto): Promise<any> {
    const payload = { email: user.username, password: user.password };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
