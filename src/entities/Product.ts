import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('produtos')
export class Product {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column({type: 'text'})
  title: string;

  @Column()
  quantity: number;

}