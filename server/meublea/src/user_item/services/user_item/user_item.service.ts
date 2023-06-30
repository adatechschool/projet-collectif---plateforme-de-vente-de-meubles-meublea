import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User.entity';
import { UserItem } from 'src/typeorm/entities/User_item.entity';
import { Repository } from 'typeorm';
import { CreateUserItemDto } from 'src/user_item/dtos/create_user_item.dto';

@Injectable()
export class UserItemService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(UserItem)
    private userItemRepository: Repository<UserItem>,
  ) {}

  async getUserItems(): Promise<any[]> {
    try {
      const userItems = await this.userItemRepository.find({
        relations: ['user'],
        select: ['id', 'name', 'price', 'userId'],
      });

      const mappedUserItems = userItems.map((item) => ({
        user_item_name: item.name,
        user_item_price: item.price,
        user_item_id: item.id,
        user_id: item.user.id,
        user_username: item.user.username,
        user_mail: item.user.mail,
      }));

      return mappedUserItems;
    } catch (error) {
      throw new Error('Erreur lors de la récupération des user items.');
    }
  }

  async createUserItem(createUserItemDto: CreateUserItemDto) {
    try {
      const { user_item_name, user_item_user_id } = createUserItemDto;

      // Créez un nouvel objet UserItem avec les informations fournies
      const newItem = new UserItem();
      newItem.name = user_item_name;
      newItem.userId = user_item_user_id;

      // Enregistrez le nouvel élément utilisateur dans la base de données
      const createdItem = await this.userItemRepository.save(newItem);

      return createdItem;
    } catch (error) {
      throw new Error(`Erreur lors de la création de l\'élément utilisateur. ${error.message}`);
    }
  }
}
