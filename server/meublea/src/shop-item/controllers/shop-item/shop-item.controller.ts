import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { ShopItemService } from 'src/shop-item/service/shop-item/shop-item.service';
import { CreateShopItemDto } from 'src/shop-item/dtos/CreateShopItem.dto';
import { UpdateShopItemDto } from 'src/shop-item/dtos/UpdateShopItem.dto';

@Controller('shop-item')
export class ShopItemController {
  constructor(private shopItemService: ShopItemService) { }

  @Get()
  getShopItems() {
    return this.shopItemService.findShopItem();
  }

  @Post()
  createShopItem(@Body() createShopItemDto: CreateShopItemDto) {
    return this.shopItemService.createShopItem(createShopItemDto);
  }

  @Put(':id')
  async updateShopItemById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateShopItemDto: UpdateShopItemDto,
  ) {
    await this.shopItemService.updateShopItem(id, updateShopItemDto);
  }
  
  @Delete(':id') // Ajoutez la méthode DELETE avec l'annotation @Delete et le paramètre 'id'
  async deleteShopItemById(@Param('id', ParseIntPipe) id: number) {
    await this.shopItemService.deleteShopItem(id);
  }
}
