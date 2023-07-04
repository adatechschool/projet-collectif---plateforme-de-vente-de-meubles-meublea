import { Module } from '@nestjs/common';
import { ShopItemController } from 'src/shop-item/controllers/shop-item/shop-item.controller';
import { ShopItemService } from './service/shop-item/shop-item.service';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopItem } from 'src/typeorm/entities/shop_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShopItem])],
  controllers: [ShopItemController],
  providers: [ShopItemService],
})
export class ShopItemModule { }
