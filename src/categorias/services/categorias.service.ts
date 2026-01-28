import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categorias } from '../entities/categorias.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categorias)
    private categoriasRepository: Repository<Categorias>,
  ) {}

  async findAll(): Promise<Categorias[]> {
    return await this.categoriasRepository.find();
  }

  async findById(id: number): Promise<Categorias> {
    const categorias = await this.categoriasRepository.findOne({
      where: {
        id,
      },
    });

    if (!categorias)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );

    return categorias;
  }
}
