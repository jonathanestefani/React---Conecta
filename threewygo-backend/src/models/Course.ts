import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Unique
} from 'typeorm';

@Entity()
@Unique(['deleted_at'])
export class Course {
  @PrimaryGeneratedColumn()
  id!: BigInt;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  date!: Date;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
