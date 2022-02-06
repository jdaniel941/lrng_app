"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersMigration1643757078990 = void 0;
class UsersMigration1643757078990 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(255) NOT NULL, "firstName" character varying(255), "lastName" character varying(255) NOT NULL, "userType" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying(255) NOT NULL)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(255) NOT NULL, "firstName" character varying(255), "lastName" character varying(255) NOT NULL, "userType" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying(255) NOT NULL)`);
    }
}
exports.UsersMigration1643757078990 = UsersMigration1643757078990;
//# sourceMappingURL=1643757078990-UsersMigration.js.map