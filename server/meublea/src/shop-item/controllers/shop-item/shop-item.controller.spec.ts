import { Test, TestingModule } from '@nestjs/testing';
import { ShopItemController } from './shop-item.controller';

describe('ShopItemController', () => {
  let controller: ShopItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopItemController],
    }).compile();

    controller = module.get<ShopItemController>(ShopItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
