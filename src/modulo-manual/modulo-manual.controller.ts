import { Controller, Get } from "@nestjs/common";
import { ModuloManualService } from "./modulo-manual.service";

@Controller()
export class ModuloManualController {
  constructor(private readonly manualService:ModuloManualService){}

  @Get('/manual')
  getManual():string {
    return this.manualService.getManual()
  }

  @Get('/manual2')
  getManual2():string {
    return this.manualService.getManual2()
  }
  
}