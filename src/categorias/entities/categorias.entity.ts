import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produtos } from '../../produtos/entities/produtos.entity';

@Entity({ name: 'tb_categorias' })
export class Categorias {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  nome!: string;

  @Column({ length: 255 })
  descricao!: string;

  @OneToMany(() => Produtos, (produto) => produto.categoria)
  produtos!: Produtos[];
}
