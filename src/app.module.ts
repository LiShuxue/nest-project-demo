import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { logger } from './logger';
import { CatModule } from './moudules/cat/cat.module';

@Module({
  imports: [CatModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger) // 可以使用多个中间件
      .forRoutes('cat'); // 可以使用在特定的路径forRoutes('cats')，或者特定的控制器forRoutes(CatsController)，或者是所有路径forRoutes('*')
  }
}
