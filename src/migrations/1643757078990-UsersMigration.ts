import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersMigration1643757078990 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userName" character varying(255 NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
