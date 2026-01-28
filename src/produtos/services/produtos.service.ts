import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Produtos } from '../entities/produtos.entity';

@Injectable()
export class ProdutosService {
  getAllProducts(): Promise<Produtos[]> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Produtos)
    private produtosRepository: Repository<Produtos>,
  ) {}

  async findAll(): Promise<Produtos[]> {
    return await this.produtosRepository.find({
      relations: { categoria: true },
    });
  }

  async getProductById(id: number): Promise<Produtos> {
    const produto = await this.produtosRepository.findOne({
      where: { id },
      relations: { categoria: true },
    });
    if (!produto)
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    return produto;
  }
  async getActiveProducts(): Promise<Produtos[]> {
    return await this.produtosRepository.find({
      where: { em_estoque: true },
      relations: { categoria: true },
    });
  }
  async createProduct(produto: Produtos): Promise<Produtos> {
    return this.produtosRepository.save(produto);
  }
  async updateProduct(produto: Produtos): Promise<Produtos> {
    await this.getProductById(produto.id);
    return await this.produtosRepository.save(produto);
  }
  async deleteProduct(id: number): Promise<DeleteResult> {
    await this.getProductById(id);
    return this.produtosRepository.delete(id);
  }
}
