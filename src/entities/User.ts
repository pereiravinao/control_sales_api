import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Sale } from "./Sale";

@Entity('usuarios')
export class User {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column({type: 'text'})
  name: string;

  @Column({type: 'text'})
  login: string;

  @Column({type: 'text'})
  password: string;

}