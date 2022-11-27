import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  getCourse() {
    return 'all courses';
  }

  saveCourse() {
    return 'save course';
  }
}
