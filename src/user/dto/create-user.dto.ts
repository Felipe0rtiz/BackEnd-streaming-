import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(6, 150)
  nome: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  nascimento: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 15)
  senha: string;
  
  @IsString()
  @IsNotEmpty()
  @Length(6, 15)
  confirmacaoSenha: string;
}
