import { Injectable } from '@nestjs/common';

@Injectable()
export class LessonsService {
  getLesson() {
    return 'all lesson';
  }

  saveLesson() {
    return 'save lesson';
  }
}
