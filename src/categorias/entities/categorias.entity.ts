import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_categorias' })
// eslint-disable-next-line prettier/prettier
export class Categorias {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  nome!: string;

  @Column({ length: 255 })
  descricao!: string;
}
