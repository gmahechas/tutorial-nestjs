import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from '../lesson.service';
import { CreateLessonInput } from './lesson.input';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}
  @Query(() => LessonType)
  lesson(@Args('id') id: string): any {
    return this.lessonService.getLesson(id);
  }

  @Query(() => [LessonType])
  lessons(): any {
    return this.lessonService.getLessons();
  }

  @Mutation(() => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): any {
    return this.lessonService.createLesson(createLessonInput);
  }
}
