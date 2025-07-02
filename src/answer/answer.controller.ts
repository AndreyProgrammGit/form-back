import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerDto } from './answer.dto';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get('')
  findAllAnswer() {
    return this.answerService.findAll();
  }

  @Post('')
  @UsePipes(new ValidationPipe())
  createAnswer(@Body() body: AnswerDto) {
    return this.answerService.create(body);
  }
}
