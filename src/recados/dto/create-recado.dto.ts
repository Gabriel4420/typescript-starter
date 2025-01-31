import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRecadoDTO {
  @IsOptional()
  @IsString({
    message: 'O campo assunto deve ser uma string',
  })
  @IsNotEmpty({
    message: 'O campo assunto é obrigatório',
  })
  readonly assunto: string;
  @IsNotEmpty({
    message: 'O campo mensagem é obrigatório',
  })
  @IsString({
    message: 'O campo mensagem deve ser uma string',
  })
  readonly mensagem: string;
  @IsNotEmpty({
    message: 'O campo de é obrigatório',
  })
  @IsString({
    message: 'O campo de deve ser uma string',
  })
  readonly de: string;
  @IsNotEmpty({
    message: 'O campo para é obrigatório',
  })
  @IsString({
    message: 'O campo para deve ser uma string',
  })
  readonly para: string;
}
