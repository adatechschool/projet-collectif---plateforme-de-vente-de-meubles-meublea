export class CreateShopItemDto {
  name: string;
  price: number;
  description: string;
  type: string;
  picture: Buffer;
  dimensions: string;
  colour: string;
  material: string;
  state: string;
  createdAt: Date;
}
