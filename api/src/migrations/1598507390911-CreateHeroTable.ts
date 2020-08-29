import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateHeroTable1598507390911 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "hero" ("id" SERIAL NOT NULL, "heroName" character varying NOT NULL, "shortDescription" character varying NOT NULL, "fullBio" character varying NOT NULL, CONSTRAINT "PK_313d51d6899322b85f2df99ccde" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "hero"`, undefined);
    }

}
