import { Module } from '@nestjs/common';
import { LessonsService } from './services/lessons.service';
import { LessonsController } from './controllers/lessons.controller';

@Module({
  providers: [LessonsService],
  controllers: [LessonsController],
})
export class LessonsModule {}
