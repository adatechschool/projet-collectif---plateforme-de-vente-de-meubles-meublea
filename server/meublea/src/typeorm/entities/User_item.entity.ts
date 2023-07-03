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

  @Column({ type: 'decimal', precision: 10, scale: 2, transformer: { from: (value) => parseFloat(value), to: (value) => value.toString() } })
  price: string;

  @Column({ length: 500, nullable: true })
  description: string;

  @Column({ length: 45 })
  type: string;

  @Column({ type: `blob`, nullable: true })
  picture: Buffer;

  @Column({ length: 45 })
  dimensions: string;

  @Column({ length: 45, nullable: true })
  colour: string;

  @Column({ length: 45, nullable: true })
  material: string;

  @Column({ length: 45, nullable: true })
  state: string;

  @Column({ name: `user_id` })
  userId: number;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
