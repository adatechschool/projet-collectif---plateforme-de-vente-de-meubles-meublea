import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { UserModule } from './user/user.module';
import { UserItemModule } from './user_item/user_item.module';
import { config } from 'dotenv';
import { join } from 'path';
import { ShopItem } from 'src/typeorm/entities/shop_item.entity';
import { DisplayItemController } from './display-item.controller';
import { ShopItemService } from './shop-item.service';
config({ path: join(__dirname, '../../.env') });
import { ShopItemModule } from './shop-item/shop-item.module';

config({ path: join(__dirname, '../../.env') });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'meublea',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    } as DataSourceOptions),
    UserModule,
    TypeOrmModule.forFeature([ShopItem]),
    UserItemModule,
    ShopItemModule,
  ],
  controllers: [AppController, DisplayItemController],
  providers: [AppService, ShopItemService],
})
export class AppModule {}
