import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { User } from "./User";

@Entity('vendas')
export class Sale {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  quantity_sale: number;
  
  @ManyToOne(() => User, user => user.login)
  @JoinColumn({name: 'user_id'})
  user: User;

  @ManyToOne(() => Product, product => product.id)
  @JoinColumn({name: 'product_id'})
  product: Product;
}