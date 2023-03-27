import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppCongiguration } from './config/app.config';
import { logger } from './utils/logger.utils';
// import { sendResponse, sendError } from './utils/response.utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger });

  AppCongiguration(app)

  await app.listen(5000);
}
bootstrap();
