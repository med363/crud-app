import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*add verifier to dto*/
  app.useGlobalPipes(new ValidationPipe());
  /*add prefix ds url*/
  app.setGlobalPrefix('/api')
  await app.listen(3000);
}
bootstrap();
