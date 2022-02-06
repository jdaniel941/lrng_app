import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from '../../dto/registerUser.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    create(userData: RegisterUserDto): Promise<any>;
    findOne(userEmail: string): Promise<User | undefined>;
}
