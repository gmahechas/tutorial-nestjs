import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoursesService } from '../services/courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  getCourse() {
    return this.coursesService.getCourse();
  }

  @Post()
  saveCourse(@Body() course: any) {
    console.log(course);
    return this.coursesService.saveCourse();
  }
}
