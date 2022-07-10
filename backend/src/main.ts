import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from "cors"
import * as cookieParser from "cookie-parser"
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin:"http://localhost:3000"
  })
  app.use(cookieParser())
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(5000);
}
bootstrap();
