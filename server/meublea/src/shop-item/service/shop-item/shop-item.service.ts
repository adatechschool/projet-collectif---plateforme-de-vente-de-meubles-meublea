import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateShopItemDto } from 'src/shop-item/dtos/CreateShopItem.dto';
import { ShopItem } from 'src/typeorm/entities/shop_item.entity';
import { Repository } from 'typeorm';
import { CreateShopItemParams, UpdateShopItemParams, PatchShopItemParams } from 'src/utils/type';

@Injectable()
export class ShopItemService {
  constructor(
    @InjectRepository(ShopItem)
    private ShopItemRepository: Repository<ShopItem>,
  ) { }

  findShopItem() {
    return this.ShopItemRepository.find();
  }

  createShopItem(ShopItemDetails: CreateShopItemParams) {
    const newShopItem = this.ShopItemRepository.create({
      ...ShopItemDetails,
      createdAt: new Date(),
    });
    return this.ShopItemRepository.save(newShopItem);
  }

  patchShopItem(id: number, patchShopItemDetails: PatchShopItemParams) {
    return this.ShopItemRepository.update({ id }, { ...patchShopItemDetails });
  }

  updateShopItem(id: number, updateShopItemDetails: UpdateShopItemParams) {
    return this.ShopItemRepository.update({ id }, { ...updateShopItemDetails });
  }

  async deleteShopItem(id: number): Promise<void> {
    await this.ShopItemRepository.delete(id);
  }
}
