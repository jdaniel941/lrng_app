import { AuthService } from "./auth.service";
import { LoginUserDto } from "../../dto/loginUser.dto";
import { RegisterUserDto } from "../../dto/registerUser.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(user: RegisterUserDto): Promise<any>;
    login(user: LoginUserDto): Promise<any>;
}
