import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
    public async getAllUsers(): Promise<User[]> {
        return this.createQueryBuilder('users').select('users').getMany()
    }
}
