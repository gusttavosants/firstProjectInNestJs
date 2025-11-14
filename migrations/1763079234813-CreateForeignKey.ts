import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateForeignKey1763079234813 implements MigrationInterface {
    name = 'CreateForeignKey1763079234813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`saleProduct\` (\`id\` int NOT NULL AUTO_INCREMENT, \`productId\` int NULL, \`saleId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sale\` (\`id\` int NOT NULL AUTO_INCREMENT, \`data\` datetime NOT NULL, \`customersId\` int NULL, \`employeeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`saleProduct\` ADD CONSTRAINT \`FK_0b94767ae03c426ea7a9f5e067e\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`saleProduct\` ADD CONSTRAINT \`FK_0fe07a1b0a41604b49b9851c9da\` FOREIGN KEY (\`saleId\`) REFERENCES \`sale\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sale\` ADD CONSTRAINT \`FK_2397482e56ce4c99991f668d4d4\` FOREIGN KEY (\`customersId\`) REFERENCES \`customers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sale\` ADD CONSTRAINT \`FK_d223bdcf5ca2969be663637c5e2\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sale\` DROP FOREIGN KEY \`FK_d223bdcf5ca2969be663637c5e2\``);
        await queryRunner.query(`ALTER TABLE \`sale\` DROP FOREIGN KEY \`FK_2397482e56ce4c99991f668d4d4\``);
        await queryRunner.query(`ALTER TABLE \`saleProduct\` DROP FOREIGN KEY \`FK_0fe07a1b0a41604b49b9851c9da\``);
        await queryRunner.query(`ALTER TABLE \`saleProduct\` DROP FOREIGN KEY \`FK_0b94767ae03c426ea7a9f5e067e\``);
        await queryRunner.query(`DROP TABLE \`sale\``);
        await queryRunner.query(`DROP TABLE \`saleProduct\``);
    }

}
