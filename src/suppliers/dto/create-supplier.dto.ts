export class CreateSupplierDto {
  id?: number;
  name: string;
  address: string;
  phone: number;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  restaurantId: string;
}
