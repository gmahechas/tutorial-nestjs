import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonResolver } from './graphql/lesson.resolver';
import { LessonService } from './lesson.service';
import { LessonEntity } from './entities/lesson.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([LessonEntity])
  ],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
