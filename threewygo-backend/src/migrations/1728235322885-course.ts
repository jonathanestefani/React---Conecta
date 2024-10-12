import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableIndex,
  } from 'typeorm';

export class Course1728235322885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'course',
            columns: [
              {
                name: 'id',
                type: 'bigint',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'title',
                type: 'varchar(255)',
              },
              {
                name: 'description',
                type: 'varchar(255)',
              },
              {
                name: 'date',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'deleted_at',
                type: 'timestamp',
                default: null,
                isNullable: true,
              },
            ],
          }),
        );
    
        await queryRunner.createIndex(
          'course',
          new TableIndex({
            name: 'IDX_1728235322885_1',
            columnNames: ['title'],
            isUnique: false,
          }),
        );

        await queryRunner.createIndex(
          'course',
          new TableIndex({
            name: 'IDX_1728235322885_2',
            columnNames: ['description'],
            isUnique: false,
          }),
        );

        await queryRunner.createIndex(
          'course',
          new TableIndex({
            name: 'IDX_1728235322885_3',
            columnNames: ['date'],
            isUnique: false,
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('course', 'IDX_1728235322885_1');
        await queryRunner.dropIndex('course', 'IDX_1728235322885_2');
        await queryRunner.dropIndex('course', 'IDX_1728235322885_3');
        await queryRunner.dropTable('course');
      }

}
