import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnswerDto } from './answer.dto';
import { Answer } from './entities/answer.entities';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
  ) {}

  async findAll(): Promise<Answer[]> {
    return await this.answerRepository.find();
  }

  async create(dto: AnswerDto): Promise<Answer> {
    const answer = this.answerRepository.create(dto);

    return await this.answerRepository.save(answer);
  }
}
