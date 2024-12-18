import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('application')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('home')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('salve')
  getSalve(): string {
    return this.appService.getSalve();
  }
}
