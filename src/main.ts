import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

//bootstrap
(async () =>
  await (
    await NestFactory.create(AppModule)
  )
    .useGlobalPipes(
      new ValidationPipe({
        whitelist: true, //remove all the properties that are not defined in the DTO
        forbidNonWhitelisted: true, //throw an error if a property that is not defined in the DTO is sent
        transform: false, //transform the payload to the type defined in the DTO
      }),
    )
    .listen(3000))();
