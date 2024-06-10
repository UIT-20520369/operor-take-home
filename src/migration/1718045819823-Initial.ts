/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1718045819823 implements MigrationInterface {
    name = 'Initial1718045819823'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "meeting" ("id" SERIAL NOT NULL, "user_id" bigint NOT NULL, "start_day" bigint NOT NULL, "end_day" bigint NOT NULL, "room_id" bigint NOT NULL, "created_at" TIMESTAMP NOT NULL, "userId" integer, CONSTRAINT "PK_dccaf9e4c0e39067d82ccc7bb83" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "gender" character varying NOT NULL, "ip_address" character varying NOT NULL, "days" bigint NOT NULL, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "meeting" ADD CONSTRAINT "FK_854982a74818bb6307419e0e6b8" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meeting" DROP CONSTRAINT "FK_854982a74818bb6307419e0e6b8"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "meeting"`);
    }

}
