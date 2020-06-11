import { Field, InputType } from '@nestjs/graphql';
import { MinLength, IsDateString } from 'class-validator';
import { Lesson } from '../interfaces/lesson.interface';

@InputType()
export class CreateLessonInput implements Lesson {
  @Field() @MinLength(1) name: string;
  @Field() @IsDateString() startDate: string;
  @Field() @IsDateString() endDate: string;
}
