import { UserTypeEnum } from '../enums/userType.enum';
export declare class User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    userType: UserTypeEnum;
    createdAt: Date;
    updatedAt: Date;
}
