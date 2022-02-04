import { AppService } from "./app.service";
import { AuthService } from "./auth/auth.service";
export declare class AppController {
    private readonly appService;
    private authService;
    constructor(appService: AppService, authService: AuthService);
    getHello(): string;
    register(req: any): Promise<any>;
    login(req: any): Promise<any>;
    getProfile(req: any): any;
}
