import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659905144044 implements MigrationInterface {
    name = 'default1659905144044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` CHANGE \`cellphone\` \`password\` text NULL`);
        await queryRunner.query(`CREATE TABLE \`clientes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`login\` text NOT NULL, \`cellphone\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` CHANGE \`password\` \`password\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` CHANGE \`password\` \`password\` text NULL`);
        await queryRunner.query(`DROP TABLE \`clientes\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` CHANGE \`password\` \`cellphone\` text NULL`);
    }

}
