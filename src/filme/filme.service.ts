import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { PrismaService } from 'src/prisma.service';
import { Filme } from '@prisma/client';

@Injectable()
export class FilmeService {
  constructor(private database: PrismaService) {}

  async create(dadosDoFilme: CreateFilmeDto): Promise<Filme> {
    const filmeExiste = await this.database.filme.findUnique({
      where: { nomeFilme: dadosDoFilme.nomeFilme },
    });

    if (filmeExiste) {
      throw new ConflictException('Esse filme já está cadastrado');
    }

    const filme = await this.database.filme.create({ data: dadosDoFilme });
    return filme;
  }

  async findAll(): Promise<Filme[]> {
    const filmes = await this.database.filme.findMany();
    return filmes;
  }

  async findOne(id: string): Promise<Filme> {
    const filmeExiste = await this.database.filme.findUnique({
      where: { id },
    });

    if (!filmeExiste) {
      throw new NotFoundException(
        'Filme com o ID informado não foi encontrado',
      );
    }

    return filmeExiste;
  }

  async update(id: string, updateFilmeDto: UpdateFilmeDto): Promise<Filme> {
    const filme = await this.database.filme.update({
      data: updateFilmeDto,
      where: { id },
    });
    return filme;
  }

  async remove(id: string): Promise<{ message: string }> {
    const filmeExiste = await this.database.filme.findUnique({
      where: { id },
    });

    if (!filmeExiste) {
      throw new NotFoundException(
        'Filme com o ID informado não foi encontrado',
      );
    } else {
      await this.database.filme.delete({
        where: { id },
      });
    }

    return { message: 'Id foi encontrado e deletado ' };
  }
}