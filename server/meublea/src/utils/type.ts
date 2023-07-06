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
  picture: string;
  dimensions: string;
  colour: string;
  material: string;
  reserved_by: number;
};

export class PatchShopItemParams {
  reserved_by: number;
}

export class UpdateShopItemParams {
  name: string;
  price: number;
  description: string;
  type: string;
  picture: string;
  dimensions: string;
  colour: string;
  material: string;
  reserved_by: number;
}
