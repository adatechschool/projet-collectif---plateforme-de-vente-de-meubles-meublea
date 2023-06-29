import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './User.entity';

@Entity({ name: 'shop_item' })
export class ShopItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ type: 'double' })
  price: number;

  @Column({ length: 500 })
  description: string;

  @Column({ length: 45 })
  type: string;

  @Column({ type: 'blob' })
  picture: Buffer;

  @Column({ length: 45 })
  dimensions: string;

  @Column({ length: 45 })
  colour: string;

  @Column({ length: 45 })
  material: string;

  @Column({ name: 'reserved_by' })
  reserved_by: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'reserved_by' })
  user: User;
}
