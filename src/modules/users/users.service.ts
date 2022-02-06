import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../entities/user.entity";
import { Repository } from "typeorm";
import { UsersRepository } from "../../repositories/users.repository";
import { RegisterUserDto } from "../../dto/registerUser.dto";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

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

  async fetchUserByEmail(
    userEmail: string
  ): Promise<Partial<User> | undefined> {
    if (userEmail) {
      const user = await this.usersRepository.findOne({
        email: userEmail,
      });
      if (user) {
        const { password, ...result } = user;
        return result;
      } else {
        throw new NotFoundException({ code: 10102 });
      }
    } else {
      throw new NotFoundException({ code: 10102 });
    }
  }

  async fetchUserById(userId: string): Promise<Partial<User> | undefined> {
    if (userId) {
      const user = await this.usersRepository.findOne({
        id: userId,
      });
      if (user) {
        const { password, ...result } = user;
        return result;
      } else {
        throw new NotFoundException({ code: 10102 });
      }
    } else {
      throw new NotFoundException({ code: 10102 });
    }
  }

  async fetchUsers(): Promise<Partial<User>[] | undefined> {
    const users = await this.usersRepository.getAllUsers();
    return users.map(({ password, ...results }) => ({ ...results }));
  }
}
