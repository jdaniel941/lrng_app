import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(userName: string, pass: string): Promise<any>;
    register(userData: any): Promise<any>;
    login(user: any): Promise<any>;
}
