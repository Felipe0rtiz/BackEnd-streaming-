import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CrendentialsDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 15)
  senha: string;
}