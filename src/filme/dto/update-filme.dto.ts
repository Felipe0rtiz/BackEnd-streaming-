import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateFilmeDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nomeFilme: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  capa: string;
}