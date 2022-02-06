import { AuthService } from './auth.service';
import { UserDto } from '../../dto/user.dto';
import { RegisterUserDto } from '../../dto/registerUser.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(user: RegisterUserDto): Promise<any>;
    login(user: UserDto): Promise<any>;
}
