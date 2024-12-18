import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

//bootstrap
(async () => await (await NestFactory.create(AppModule)).listen(3000))()
