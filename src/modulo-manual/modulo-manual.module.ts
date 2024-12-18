import { Module } from "@nestjs/common";
import { ModuloManualController } from "./modulo-manual.controller";
import { ModuloManualService } from "./modulo-manual.service";

@Module({
  imports: [],
  controllers: [ModuloManualController],
  providers: [ModuloManualService],
  exports: [],
})


export class ModuloManualModule {}