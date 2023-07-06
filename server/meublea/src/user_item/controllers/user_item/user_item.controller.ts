import { Controller, Get, Post, Body, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { UserItemService } from 'src/user_item/services/user_item/user_item.service';
import { CreateUserItemDto } from 'src/user_item/dtos/create_user_item.dto';

@Controller('user-item')
export class UserItemController {
  constructor(private userItemService: UserItemService) { }

  @Get()
  async getUserItems(): Promise<any[]> {
    return await this.userItemService.getUserItems();
  }

  @Post()
  async createUserItem(@Body() createUserItemDto: CreateUserItemDto): Promise<any> {
    return await this.userItemService.createUserItem(createUserItemDto);
  }

  @Delete(':id')
  async deleteUserItemById(@Param('id', ParseIntPipe) id: number) {
    await this.userItemService.deleteUserItem(id);
  }
}
