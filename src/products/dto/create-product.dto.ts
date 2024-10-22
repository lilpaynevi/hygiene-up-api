export class CreateProductDto {
  id?: number;
  name: string;
  type_ProductsId: number;
  restaurantId: string;
  isDLC?: boolean;
  quantityDLC?: number;
  typeQuantityDLC?: string;
  isFinished?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
