import { Injectable } from '@nestjs/common';
import { Recado } from './entities/recado.entity';

@Injectable()
export class RecadosService {
  private lastId = 0;
  private recados: Recado[] = [
    {
      id: 1,
      assunto: 'Olá, mundo!',
      mensagem: 'Bem-vindo ao meu aplicativo de recados!',
      de: 'João',
      para: 'Maria',
      lido: false,
      data: new Date(),
    },
  ];
  findAll() {
    return this.recados;
  }
  findOne(id: string) {
    return this.recados.find(recado => recado.id === +id);
  }
}
