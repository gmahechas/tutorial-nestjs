import { Body, Controller, Get, Post } from '@nestjs/common';
import { LessonsService } from '../services/lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Get()
  getLesson() {
    return this.lessonsService.getLesson();
  }

  @Post()
  saveLesson(@Body() lesson: any) {
    console.log(lesson);
    return this.lessonsService.saveLesson();
  }
}
