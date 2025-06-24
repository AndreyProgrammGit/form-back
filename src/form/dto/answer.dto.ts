import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { Question } from '../entities/question.entities';

export class AnswerDto {
  @IsString({ message: 'Поле должно быть текстом' })
  @Length(3, 100, {
    message: 'Кол-во символов не должно быть меньше 3 или больше 100',
  })
  answerText?: string;

  @IsArray({ message: 'Поле должно быть массивом' })
  answerOptions?: string[];

  @IsBoolean({ message: 'Поле не может содержать ничего кроме boolean типа' })
  answerBoolean?: boolean;

  @IsNumber({}, { message: 'Значение дожно быть только числом' })
  @IsNotEmpty({ message: 'Поле не может быть пустып' })
  question: Question;
}
