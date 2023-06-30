export type CreateUserParams = {
  username: string;
  mail: string;
  password: string;
};

export type UpdateUserParams = {
  username: string;
  mail: string;
  password: string;
};

export type CreateUserItemParams = {
  name: string;
  type: string;
  price: string;
  dimensions: string;
  userId: number;
};
export type CreateShopItemParams = {
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
};

export class UpdateShopItemParams {
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
