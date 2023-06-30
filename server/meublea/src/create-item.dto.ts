import { Buffer } from 'node:buffer';

export class CreateItemDto {
  name: string;
  type: string;
  price: number;
  picture: Buffer;
  description: string;
  dimensions: string;
  colour: string;
  material: string;
  reservedBy: number;
}
