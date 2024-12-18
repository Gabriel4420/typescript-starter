import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuloManualModule } from 'src/modulo-manual/modulo-manual.module';
import { ConceitosAutomaticoModule } from 'src/conceitos-automatico/conceitos-automatico.module';

@Module({
  imports: [ModuloManualModule, ConceitosAutomaticoModule],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
})
export class AppModule {}
