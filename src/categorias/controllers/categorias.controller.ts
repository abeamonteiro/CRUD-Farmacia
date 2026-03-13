/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common'
import { Categorias } from '../entities/categorias.entity';
import { CategoriasService } from '../services/categorias.service';

@Controller("/categorias")
export class CategoriasController {

  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  findAll() {
    return this.categoriasService.findAll()
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.categoriasService.findById(id)
  }

  @Get('/nome/:nome')
  findByNome(@Param('nome') nome: string) {
    return this.categoriasService.findByNome(nome)
  }

  @Post()
  @HttpCode(201)
  create(@Body() categoria: Categorias) {
    return this.categoriasService.create(categoria)
  }

  @Put()
  update(@Body() categoria: Categorias) {
    return this.categoriasService.update(categoria)
  }

  @Delete('/:id')
  @HttpCode(204)
  delete(@Param('id') id: number) {
    return this.categoriasService.delete(id)
  }
}