import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FormService } from './form.service';
import { QuestionDto } from './dto/question.dto';
import { AnswerDto } from './dto/answer.dto';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get('/allQuestion')
  findAllQuestion() {
    return this.formService.findAllQuestion();
  }

  @Get('/allAsnwer')
  findAllAnswer() {
    return this.formService.findAllAnswers();
  }

  @Post('/createQuestion')
  @UsePipes(new ValidationPipe())
  createQuestion(@Body() body: QuestionDto) {
    return this.formService.createQuestion(body);
  }

  @Post('/createAnswer')
  createAnswer(@Body() body: AnswerDto) {
    return this.formService.createAnswer(body);
  }
}
