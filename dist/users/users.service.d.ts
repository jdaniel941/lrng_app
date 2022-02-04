export declare type User = {
    userId: number;
    username: string;
    password: string;
};
export declare class UsersService {
    private users;
    constructor();
    create(userData: any): Promise<any>;
    findOne(userName: string): Promise<User | undefined>;
}
