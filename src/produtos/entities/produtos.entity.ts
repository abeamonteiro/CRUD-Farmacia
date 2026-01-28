/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import {  Column,  Entity,  JoinColumn,  ManyToOne,  PrimaryGeneratedColumn } from 'typeorm';
import { Categorias } from '../../categorias/entities/categorias.entity';

@Entity({ name: 'tb_produtos' })
export class Produtos {
 
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @Column({ length: 500, nullable: true })
  descricao: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  preco: number;

  @IsNotEmpty()
  @Column({ type: 'boolean', nullable: false })
  em_estoque: boolean;

  @ManyToOne(() => Categorias, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categorias;
}
