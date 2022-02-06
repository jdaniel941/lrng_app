"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const users_repository_1 = require("../../repositories/users.repository");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(userData) {
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
    async fetchUserByEmail(userEmail) {
        if (userEmail) {
            const user = await this.usersRepository.findOne({
                email: userEmail,
            });
            if (user) {
                const { password } = user, result = __rest(user, ["password"]);
                return result;
            }
            else {
                throw new common_1.NotFoundException({ code: 10102 });
            }
        }
        else {
            throw new common_1.NotFoundException({ code: 10102 });
        }
    }
    async fetchUserById(userId) {
        if (userId) {
            const user = await this.usersRepository.findOne({
                id: userId,
            });
            if (user) {
                const { password } = user, result = __rest(user, ["password"]);
                return result;
            }
            else {
                throw new common_1.NotFoundException({ code: 10102 });
            }
        }
        else {
            throw new common_1.NotFoundException({ code: 10102 });
        }
    }
    async fetchUsers() {
        const users = await this.usersRepository.getAllUsers();
        return users.map((_a) => {
            var { password } = _a, results = __rest(_a, ["password"]);
            return (Object.assign({}, results));
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map