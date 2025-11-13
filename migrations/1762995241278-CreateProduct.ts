import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProduct1762995241278 implements MigrationInterface {
    name = 'CreateProduct1762995241278'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customers\` DROP COLUMN \`cpf\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP COLUMN \`idade\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee\` ADD \`idade\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD \`cpf\` int NOT NULL`);
    }

}
