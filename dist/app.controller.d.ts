import { AuthService } from './auth/auth.service';
import { UserDto } from './dto/user.dto';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    register(req: any): Promise<any>;
    login(user: UserDto): Promise<any>;
    getProfile(req: any): any;
}
