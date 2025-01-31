import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDTO } from './dto/create-recado.dto';
import { UpdateRecadoDTO } from './dto/update-recado.dto';

@Controller('recados')
export class RecadosController {
  // CRUD
  // Create -> POST -> Criar um recado
  // Read -> GET -> Ler todos os recado
  // Read -> GET -> Ler um recado
  // Update -> PATCH / PUT -> Atualizar um recado
  // Delete -> DELETE -> Deletar um recado

  // PATCH -> Atualização de dados parcial de um recurso
  // PUT -> Atualização de dados completo de um recurso

  // DTO -> Data Transfer Object -> Objeto de transferência de dados
  // DTO -> Objeto simples -> Validar dados / Transformar dados

  constructor(private recadosService: RecadosService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createRecadoDTO: CreateRecadoDTO) {
    return this.recadosService.create(createRecadoDTO);
  }

  @Get('all')
  findAll() {
    return this.recadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.recadosService.findOne(id.toString());
  }

  @Patch('update/:id')
  updateOne(@Param('id') id: number, @Body() updateRecadoDTO: UpdateRecadoDTO) {
    return this.recadosService.update(id.toString(), updateRecadoDTO);
  }

  @Delete('delete/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.recadosService.remove(id.toString());
  }
}
