import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterAutorEntity1716851071391 implements MigrationInterface {
    name = 'AlterAutorEntity1716851071391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "autores" ADD "data_nascimento" date`);
        await queryRunner.query(`CREATE TYPE "public"."autores_genero_enum" AS ENUM('I', 'M', 'F')`);
        await queryRunner.query(`ALTER TABLE "autores" ADD "genero" "public"."autores_genero_enum" DEFAULT 'I'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "autores" DROP COLUMN "genero"`);
        await queryRunner.query(`DROP TYPE "public"."autores_genero_enum"`);
        await queryRunner.query(`ALTER TABLE "autores" DROP COLUMN "data_nascimento"`);
    }

}
