import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasController } from './controllers/categorias.controller';
import { CategoriasService } from './services/categorias.service';
import { Categorias } from './entities/categorias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categorias])],
  controllers: [CategoriasController],
  providers: [CategoriasService],
})
export class CategoriasModule {}
