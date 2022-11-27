import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';

import { SharedModule } from './shared/shared.module';
import { CoursesModule } from './modules/courses/courses.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { AuthenticationMiddleware } from './shared/middlewares/authentication.middleware';

@Module({
  imports: [SharedModule, CoursesModule, LessonsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes({ path: 'lessons', method: RequestMethod.ALL });
  }
}
