import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Lesson } from '../interfaces/lesson.interface'

@ObjectType('Lesson')
export class LessonType implements Lesson {
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field() startDate: string;
  @Field() endDate: string;
}
