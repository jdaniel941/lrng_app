import { Users } from '../entities/users.entity';
import { Repository } from 'typeorm';
export declare type User = {
    userId: number;
    username: string;
    password: string;
};
export declare class UsersService {
    private readonly usersRepository;
    private users;
    constructor(usersRepository: Repository<Users>);
    create(userData: any): Promise<any>;
    findOne(userName: string): Promise<User | undefined>;
}
