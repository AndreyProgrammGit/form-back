import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entities';
import { QuestionDto } from './question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async findById(id: number): Promise<Question[]> {
    return await this.questionRepository.findBy({
      id: id,
    });
  }

  async findAll(): Promise<Question[]> {
    return await this.questionRepository.find();
  }

  async create(dto: QuestionDto): Promise<Question> {
    const question = this.questionRepository.create(dto);

    return await this.questionRepository.save(question);
  }
}
