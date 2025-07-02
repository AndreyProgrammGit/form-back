import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Question } from '../question/entities/question.entities';

export class AnswerDto {
  @IsOptional()
  @IsString({ message: 'Поле должно быть текстом' })
  @IsNotEmpty({ message: 'Поле не может быть пустып' })
  @Length(3, 100, {
    message: 'Кол-во символов не должно быть меньше 3 или больше 100',
  })
  answerText?: string;

  @IsOptional()
  @IsArray({ message: 'Поле должно быть массивом' })
  answerOptions?: string[];

  @IsOptional()
  @IsBoolean({ message: 'Поле не может содержать ничего кроме boolean типа' })
  answerBoolean?: boolean;

  @IsNumber({}, { message: 'Значение дожно быть только числом' })
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  question: Question;
}
