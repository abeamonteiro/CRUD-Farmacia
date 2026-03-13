import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './entities/produtos.entity';
import { ProdutosService } from './services/produtos.service';
import { ProdutosController } from './controllers/produtos.controller';
import { Categorias } from '../categorias/entities/categorias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produtos, Categorias])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
