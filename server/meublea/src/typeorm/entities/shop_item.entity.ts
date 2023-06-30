import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
} from 'typeorm';
import { User } from './User.entity';

@Entity({ name: 'shop_item' })
export class ShopItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  type: string;

  @Column({ type: 'blob', nullable: true })
  picture: Buffer;

  @Column({ default: 'N/A' })
  dimensions: string;

  @Column({ default: 'N/A' })
  colour: string;

  @Column({ default: 'N/A' })
  material: string;

  @Column({ name: 'reserved_by' })
  reserved_by: number;

  @BeforeInsert()
  setDefaultValues() {
    if (!this.name) {
      this.name = ''; // Définition de la valeur par défaut à ''
    }
  }

  @ManyToOne(() => User)
  @JoinColumn({ name: 'reserved_by' })
  user: User;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
