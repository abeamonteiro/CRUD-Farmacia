import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produtos } from '../../produtos/entities/produtos.entity';

@Entity({ name: 'tb_categorias' })
export class Categorias {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  tipo: string;

  @Column({ length: 500, nullable: true })
  descricao: string;

  @ManyToOne(() => Produtos, (produtos) => produtos.categoria)
  produto: Produtos[];
}
