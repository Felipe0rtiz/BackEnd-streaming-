import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { PrismaService } from 'src/prisma.service';
  import { CrendentialsDto } from './dto/credentials.dto';
  import { User } from '@prisma/client';
  import * as bcrypt from 'bcrypt';
  import { JwtService } from '@nestjs/jwt';
  
  @Injectable()
  export class AuthService {
    constructor(private database: PrismaService, private jwt: JwtService) {}
  
    async login(dadosDoLogin: CrendentialsDto) {
      const usuarioExiste = await this.database.user.findUnique({
        where: { email: dadosDoLogin.email },
      });
  
      if (!usuarioExiste) {
        throw new NotFoundException('Usuário não encontrado');
      }
  
      const senhaValida = await bcrypt.compare(
        dadosDoLogin.senha,
        usuarioExiste.senha,
      );
  
      if (senhaValida) {
        const ingresso = {
          email: usuarioExiste.email,
        };
  
        const token = await this.jwt.sign(ingresso);
  
        return { token };
      } else {
        throw new UnauthorizedException('Credenciais inválidas');
      }
    }
  }