import { UserTypeEnum } from '../enums/userType.enum';
export declare class RegisterUserDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userType: UserTypeEnum;
}
