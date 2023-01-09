import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as morgan from 'morgan';

async function bootstrap() {
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);

  app.use(morgan('short'));

  const port = process.env.PORT;
  await app.listen(port);
  logger.log(`Application is running on port ${port}`);
}
bootstrap();
