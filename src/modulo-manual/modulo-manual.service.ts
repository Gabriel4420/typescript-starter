import { Injectable } from "@nestjs/common";

@Injectable()
export class ModuloManualService {
  getManual():string {
    return 'Hello Manual'
  }
  getManual2():string{
    return 'Hello Manual 2'
  }
}