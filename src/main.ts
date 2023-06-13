import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*add prefix ds url*/
  app.setGlobalPrefix('/api')
  await app.listen(3000);
}
bootstrap();
