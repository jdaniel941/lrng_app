import { EntityRepository, Repository } from 'typeorm';
import { Users } from '../../../../lrng_app/src/entities/users.entity';

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {}
