import { IsString, IsNotEmpty } from 'class-validator';

export class CreateFilmeDto {
  @IsString()
  @IsNotEmpty()
  nomeFilme: string;

  @IsString()
  @IsNotEmpty()
  genero: string;

  @IsString()
  @IsNotEmpty()
  duracao: string;

  @IsString()
  @IsNotEmpty()
  capa: string;

  @IsString()
  @IsNotEmpty()
  diretor: string;

  @IsString()
  @IsNotEmpty()
  lancamento: string;
  
}