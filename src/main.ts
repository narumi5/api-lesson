import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import * as cookieparser from 'cookie-parser';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true}));
  app.enableCors({
    credentials: true,
    origin: ['https://localhost:3000'],
  });
  app.use(cookieparser());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
