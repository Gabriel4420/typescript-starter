import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDTO } from './dto/create-recado.dto';
import { UpdateRecadoDTO } from './dto/update-recado.dto';

@Injectable()
export class RecadosService {
  private lastId = 1;
  private recados: Recado[] = [
    {
      id: 1,
      assunto: 'Este é um recado de teste',
      mensagem: 'Este é um recado de teste',
      de: 'Joana',
      para: 'João',
      lido: false,
      data: new Date(),
    },
  ];

  throwNotFoundError() {
    throw new NotFoundException('Recado não encontrado');
  }

  findAll() {
    return this.recados;
  }
  findOne(id: string) {
    const recado = this.recados.find(item => item.id === +id);

    if (recado) {
      return recado;
    } else {
      throw new NotFoundException(`Recado com id ${id} não encontrado`);
    }
  }
  create(createRecadoDTO: CreateRecadoDTO) {
    this.lastId++;
    const id = this.lastId;
    const novoRecado = {
      id,
      ...createRecadoDTO,
      lido: false,
      data: new Date(),
    };
    this.recados.push(novoRecado);
    return novoRecado;
  }
  update(id: string, updateRecadoDTO: UpdateRecadoDTO) {
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    );
    if (recadoExistenteIndex < 0) {
      this.throwNotFoundError();
    }
    const recadoExistente = this.recados[recadoExistenteIndex];
    this.recados[recadoExistenteIndex] = {
      ...recadoExistente,
      ...updateRecadoDTO,
    };
    return this.recados[recadoExistenteIndex];
  }
  remove(id: string) {
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    );
    if (recadoExistenteIndex < 0) {
      this.throwNotFoundError();
    } else {
      const recado = this.recados[recadoExistenteIndex];
      this.recados.splice(recadoExistenteIndex, 1);
      return `Recado ${recado} removido com sucesso`;
    }
  }
}
