import { PartialType } from '@nestjs/swagger';
import { CreateSupplierDto } from './create-supplier.dto';

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {
  id?: number;
  name: string;
  address: string;
  phone: number;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  restaurantId: string;
}
