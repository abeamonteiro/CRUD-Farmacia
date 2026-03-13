import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Categorias } from '../entities/categorias.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categorias)
    private categoriasRepository: Repository<Categorias>,
  ) {}

  async findAll(): Promise<Categorias[]> {
    return await this.categoriasRepository.find({
      relations: {
        produtos: true,
      },
    });
  }

  async findById(id: number): Promise<Categorias> {
    const categoria = await this.categoriasRepository.findOne({
      where: { id },
      relations: {
        produtos: true,
      },
    });

    if (!categoria)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );

    return categoria;
  }

  async findByNome(nome: string): Promise<Categorias[]> {
    return await this.categoriasRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        produtos: true,
      },
    });
  }

  async create(categoria: Categorias): Promise<Categorias> {
    return await this.categoriasRepository.save(categoria);
  }

  async update(categoria: Categorias): Promise<Categorias> {
    await this.findById(categoria.id);

    return await this.categoriasRepository.save(categoria);
  }

  async delete(id: number) {
    const categoria = await this.findById(id);

    if (!categoria)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );

    await this.categoriasRepository.delete(id);
  }
}
