import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';
import { Lesson } from '../interfaces/lesson.interface';

@Entity('lesson')
export class LessonEntity implements Lesson {
  @ObjectIdColumn() _id: string;
  @PrimaryColumn() id: string;
  @Column() name: string;
  @Column() startDate: string;
  @Column() endDate: string;
}
