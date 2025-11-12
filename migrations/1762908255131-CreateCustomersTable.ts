import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCustomersTable1762908255131 implements MigrationInterface {
    name = 'CreateCustomersTable1762908255131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customers\` ADD \`cpf\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customers\` DROP COLUMN \`cpf\``);
    }

}
