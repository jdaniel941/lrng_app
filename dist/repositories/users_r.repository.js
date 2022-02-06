"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users_rRepository = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../entities/users.entity");
let Users_rRepository = class Users_rRepository extends typeorm_1.Repository {
};
Users_rRepository = __decorate([
    (0, typeorm_1.EntityRepository)(users_entity_1.Users)
], Users_rRepository);
exports.Users_rRepository = Users_rRepository;
//# sourceMappingURL=users_r.repository.js.map