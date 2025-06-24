import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  questionTitle: string;

  @Column({
    type: 'enum',
    enum: ['text', 'boolean', 'checkbox'],
  })
  answerType: 'text' | 'boolean' | 'сheckbox';

  @Column({ type: 'jsonb', nullable: true })
  options?: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
