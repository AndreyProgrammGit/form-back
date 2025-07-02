import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionDto } from './question.dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get('')
  findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.questionService.findById(+id);
  }

  @Post('')
  @UsePipes(new ValidationPipe())
  createQuestion(@Body() body: QuestionDto) {
    return this.questionService.create(body);
  }
}
