import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class QuestionDto {
  @IsString()
  @Length(3, 50, {
    message:
      'Название вопроса не должно быть меньше 3 символов и превышать 50 символов',
  })
  questionTitle: string;

  @IsNotEmpty({ message: 'Выберите тип ответа' })
  answerType: 'text' | 'boolean' | 'сheckbox';

  @IsArray({ message: 'Опции должны быть массивом' })
  @ArrayMinSize(2, { message: 'Должно быть минимум 2 варианта' })
  @ArrayMaxSize(5, { message: 'Не может быть больше 5 варинатов' })
  options?: string[];
}
