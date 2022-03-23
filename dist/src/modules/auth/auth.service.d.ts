import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { RegisterUserDto } from "../../dto/registerUser.dto";
import { LoginUserDto } from "../../dto/loginUser.dto";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    register(userData: RegisterUserDto): Promise<any>;
    login(user: LoginUserDto): Promise<any>;
}
