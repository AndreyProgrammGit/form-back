import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entities';
import { Answer } from './entities/answer.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Answer])],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
