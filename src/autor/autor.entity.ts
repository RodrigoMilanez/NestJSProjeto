import { GeneroEnum } from 'src/genero.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'autores' })
export class AutorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column({type: 'date', name:'data_nascimento', nullable: true})
  dataNascimento:Date;

  @Column({
    type:'enum',
    enum: GeneroEnum,
    default: GeneroEnum.INDEFINIDO,
    nullable: true
  })
  genero: GeneroEnum;
}
