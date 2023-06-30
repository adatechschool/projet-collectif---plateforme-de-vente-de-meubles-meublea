import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './User.entity';

@Entity({ name: `user_item` })
export class UserItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ length: 500 })
  description: string;

  @Column({ length: 45 })
  type: string;

  @Column({ type: `blob` })
  picture: Buffer;

  @Column({ length: 45 })
  dimensions: string;

  @Column({ length: 45 })
  colour: string;

  @Column({ length: 45 })
  material: string;

  @Column({ length: 45 })
  state: string;

  @Column({ name: `user_id` })
  userId: number;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
