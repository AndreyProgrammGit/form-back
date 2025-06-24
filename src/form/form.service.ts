import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './entities/question.entities';
import { Repository } from 'typeorm';
import { QuestionDto } from './dto/question.dto';
import { Answer } from './entities/answer.entities';
import { AnswerDto } from './dto/answer.dto';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
  ) {}

  async findAllQuestion(): Promise<Question[]> {
    return await this.questionRepository.find();
  }

  async createQuestion(dto: QuestionDto): Promise<Question> {
    const question = this.questionRepository.create(dto);

    return await this.questionRepository.save(question);
  }

  async findAllAnswers(): Promise<Answer[]> {
    return await this.answerRepository.find();
  }

  async createAnswer(dto: AnswerDto): Promise<Answer> {
    const answer = this.answerRepository.create(dto);

    return await this.answerRepository.save(answer);
  }
}
