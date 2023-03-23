import { MigrationInterface, QueryRunner } from "typeorm";

export class GameMigration1678325090178 implements MigrationInterface {
    name = 'GameMigration1678325090178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "game" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "high_score" integer NOT NULL, "date_score_achieved" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_352a30652cd352f552fef73dec5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "game" ADD CONSTRAINT "FK_a8106c0a84d70ecfc3358301c54" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game" DROP CONSTRAINT "FK_a8106c0a84d70ecfc3358301c54"`);
        await queryRunner.query(`DROP TABLE "game"`);
    }

}
