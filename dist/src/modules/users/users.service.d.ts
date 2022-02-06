import { User } from "../../entities/user.entity";
import { UsersRepository } from "../../repositories/users.repository";
import { RegisterUserDto } from "../../dto/registerUser.dto";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    create(userData: RegisterUserDto): Promise<any>;
    fetchUserByEmail(userEmail: string): Promise<Partial<User> | undefined>;
    fetchUserById(userId: string): Promise<Partial<User> | undefined>;
    fetchUsers(): Promise<Partial<User>[] | undefined>;
}
