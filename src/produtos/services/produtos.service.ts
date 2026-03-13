import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Produtos } from '../entities/produtos.entity';
import { Categorias } from '../../categorias/entities/categorias.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produtos)
    private produtosRepository: Repository<Produtos>,

    @InjectRepository(Categorias)
    private categoriasRepository: Repository<Categorias>,
  ) {}

  async findAll(): Promise<Produtos[]> {
    return await this.produtosRepository.find({
      relations: {
        categoria: true,
      },
    });
  }

  async findById(id: number): Promise<Produtos> {
    const produto = await this.produtosRepository.findOne({
      where: { id },
      relations: {
        categoria: true,
      },
    });

    if (!produto)
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

    return produto;
  }

  async findByNome(nome: string): Promise<Produtos[]> {
    return await this.produtosRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        categoria: true,
      },
    });
  }

  async create(produto: Produtos): Promise<Produtos> {
    const categoria = await this.categoriasRepository.findOne({
      where: { id: produto.categoria.id },
    });

    if (!categoria)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.BAD_REQUEST,
      );

    return await this.produtosRepository.save(produto);
  }

  async update(produto: Produtos): Promise<Produtos> {
    await this.findById(produto.id);

    return await this.produtosRepository.save(produto);
  }

  async delete(id: number) {
    const produto = await this.findById(id);

    if (!produto)
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

    await this.produtosRepository.delete(id);
  }
}
