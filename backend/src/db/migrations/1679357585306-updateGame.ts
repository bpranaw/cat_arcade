import { MigrationInterface, QueryRunner } from "typeorm";

export class updateGame1679357585306 implements MigrationInterface {
    name = 'updateGame1679357585306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game" ADD "game_name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game" DROP COLUMN "game_name"`);
    }

}
