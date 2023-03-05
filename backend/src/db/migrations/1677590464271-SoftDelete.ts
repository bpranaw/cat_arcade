import {MigrationInterface, QueryRunner} from "typeorm";

export class SoftDelete1677590464271 implements MigrationInterface {
	name = 'SoftDelete1677590464271'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE "match"
        ADD "deleted_at" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "users"
        ADD "badwords" integer NOT NULL DEFAULT 0`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE "users"
        DROP COLUMN "badwords"`);
		await queryRunner.query(`ALTER TABLE "match"
        DROP COLUMN "deleted_at"`);
	}

}
