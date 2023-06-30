import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopItem } from './typeorm/entities/shop_item.entity';

@Injectable()
export class ShopItemService {
  constructor(
    @InjectRepository(ShopItem)
    private shopItemRepository: Repository<ShopItem>,
  ) {}

  async getAllItems(): Promise<ShopItem[]> {
    return this.shopItemRepository.find();
  }

  /* Méthode pour insérer les données dans la table "shop_item" 
  La méthode s'appelle CreateItem
  */

  async createItem(itemData: Partial<ShopItem>): Promise<ShopItem> {
    const newItem = this.shopItemRepository.create(itemData);
    return this.shopItemRepository.save(newItem);
  }
}
