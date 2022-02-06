import { UsersService } from "./users.service";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUserById(userId: any): Promise<Partial<import("../../entities/user.entity").User>>;
    getUserByEmail(email: any): Promise<Partial<import("../../entities/user.entity").User>>;
    getAllUsers(): Promise<Partial<import("../../entities/user.entity").User>[]>;
}
