import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column({type: 'text'})
  name: string;

  @Column({type: 'text'})
  login: string;

  @Column({type: 'text', nullable: true})
  cellphone: string;

}