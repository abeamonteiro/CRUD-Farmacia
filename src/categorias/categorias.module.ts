import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasController } from './controllers/categorias.controller';
import { Categorias } from './entities/categorias.entity';
import { CategoriasService } from './services/categorias.service';

@Module({
  imports: [TypeOrmModule.forFeature([Categorias])],
  providers: [CategoriasService],
  controllers: [CategoriasController],
  exports: [],
})
export class CategoriasModule {}
