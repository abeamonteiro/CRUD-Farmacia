/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { Produtos } from '../entities/produtos.entity';
import { ProdutosService } from '../services/produtos.service';

@Controller("/produtos")
export class ProdutosController {

  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  findAll() {
    return this.produtosService.findAll()
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.produtosService.findById(id)
  }

  @Get('/nome/:nome')
  findByNome(@Param('nome') nome: string) {
    return this.produtosService.findByNome(nome)
  }

  @Post()
  @HttpCode(201)
  create(@Body() produto: Produtos) {
    return this.produtosService.create(produto)
  }

  @Put()
  update(@Body() produto: Produtos) {
    return this.produtosService.update(produto)
  }

  @Delete('/:id')
  @HttpCode(204)
  delete(@Param('id') id: number) {
    return this.produtosService.delete(id)
  }
}
