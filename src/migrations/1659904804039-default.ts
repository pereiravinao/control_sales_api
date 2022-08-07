import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659904804039 implements MigrationInterface {
    name = 'default1659904804039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`login\` text NOT NULL, \`cellphone\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`produtos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` text NOT NULL, \`quantity\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vendas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantity_sale\` int NOT NULL, \`user_id\` int NULL, \`product_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`vendas\` ADD CONSTRAINT \`FK_c2bb68bb03e52e743cb78a69463\` FOREIGN KEY (\`user_id\`) REFERENCES \`usuarios\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vendas\` ADD CONSTRAINT \`FK_2596c9967e356efb60ab541bd40\` FOREIGN KEY (\`product_id\`) REFERENCES \`produtos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`vendas\` DROP FOREIGN KEY \`FK_2596c9967e356efb60ab541bd40\``);
        await queryRunner.query(`ALTER TABLE \`vendas\` DROP FOREIGN KEY \`FK_c2bb68bb03e52e743cb78a69463\``);
        await queryRunner.query(`DROP TABLE \`vendas\``);
        await queryRunner.query(`DROP TABLE \`produtos\``);
        await queryRunner.query(`DROP TABLE \`usuarios\``);
    }

}
