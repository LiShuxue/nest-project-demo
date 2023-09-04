import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyInterceptor } from './interceptor';
import { HttpExceptionFilter } from './filter';
import { AuthGuard } from './authGuard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new MyInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
}
bootstrap();
