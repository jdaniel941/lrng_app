import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserTypeEnum } from '../enums/userType.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  password: string;

  @Column()
  @IsNotEmpty()
  @IsEnum(UserTypeEnum)
  userType: UserTypeEnum;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
