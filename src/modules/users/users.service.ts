import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { UsersRepository } from '../../repositories/users.repository';
import { RegisterUserDto } from '../../dto/registerUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(userData: RegisterUserDto): Promise<any> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    await this.usersRepository.save({
      userType: userData.userType,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: hashedPassword,
    });
    return true;
  }

  async findOne(userEmail: string): Promise<User | undefined> {
    return await this.usersRepository.findOne(userEmail);
  }
}
