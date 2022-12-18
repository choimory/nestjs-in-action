import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { typeOrmOptions } from './config/typeorm.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  //port
  await app.listen(AppModule.getPort());

  //validation
  app.useGlobalPipes(new ValidationPipe());

  //boot log
  console.log(`NODE_ENV: ${AppModule.getNodeEnv()}`);
  console.log(`PORT: ${AppModule.getPort()}`);
  console.log(typeOrmOptions);
}
bootstrap();
