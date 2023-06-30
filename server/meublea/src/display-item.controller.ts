import { Controller, Get, Post, Body } from '@nestjs/common';

import { ShopItemService } from './shop-item.service';

import { CreateItemDto } from './create-item.dto';

import { ShopItem } from './typeorm/entities/shop_item.entity';

@Controller('main/display_item')
export class DisplayItemController {
  constructor(private readonly shopItemService: ShopItemService) {}

  @Get()
  async displayItems() {
    const items = await this.shopItemService.getAllItems();
    return items.map((item) => ({
      name: item.name,
      type: item.type,
      price: item.price,
      picture: item.picture,
      id: item.id,
      reserved_by: item.reserved_by,
    }));
  }

  @Post()
  async createItem(@Body() itemData: CreateItemDto) {
    // Assurez-vous de fournir une valeur valide pour reservedBy
    itemData.reservedBy = 1; // Remplacez 1 par l'ID de l'utilisateur existantt

    const newItem = await this.shopItemService.createItem(itemData);

    return {
      message: 'Nouvel élément créé avec succès',
      item: newItem,
    };
  }
}
