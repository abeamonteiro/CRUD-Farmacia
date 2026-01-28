import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { Categorias } from '../entities/categorias.entity';
import { CategoriasService } from '../services/categorias.service';

@Controller('/categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categorias[]> {
    return this.categoriasService.findAll();
  }
}
