import { Module } from '@nestjs/common';
import { UserItemController } from './controllers/user_item/user_item.controller';
import { UserItemService } from './services/user_item/user_item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User.entity';
import { UserItem } from 'src/typeorm/entities/User_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserItem])],
  controllers: [UserItemController],
  providers: [UserItemService]
})
export class UserItemModule {}
