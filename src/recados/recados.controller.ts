import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private recadosService: RecadosService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Get('all')
  findAll(@Query() pagination: any) {
    console.log(pagination);
    return this.recadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') parametro: string) {
    return this.recadosService.findOne(parametro);
  }

  @Patch('update/:id')
  updateOne(@Param('id') id: number, @Body() body: any) {
    return { id, ...body };
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return `essa rota apaga o id: ${id}`;
  }
}
