import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosController } from './controllers/produtos.controller';
import { Produtos } from './entities/produtos.entity';
import { ProdutosService } from './services/produtos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produtos])],
  providers: [ProdutosService],
  controllers: [ProdutosController],
  exports: [],
})
export class ProdutosModule {}
