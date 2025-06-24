import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Question } from './question.entities';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  answerText?: string;

  @Column({ type: 'jsonb', nullable: true })
  answerOptions?: string[];

  @Column({ type: 'boolean', nullable: true })
  answerBoolean?: boolean;

  @ManyToOne(() => Question, { onDelete: 'CASCADE' })
  question: Question;

  @CreateDateColumn()
  createdAt: Date;
}
