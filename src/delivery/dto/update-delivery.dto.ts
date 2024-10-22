import { PartialType } from '@nestjs/swagger';
import { CreateDeliveryDto, TYPE_CONFORMITY } from './create-delivery.dto';

export class UpdateDeliveryDto extends PartialType(CreateDeliveryDto) {
  comments: string;
  createdAt: Date;
  updatedAt: Date;
  restaurantId: string;
  suppliersId: number;
  type_ProductsId?: number;
  productsId?: number;
  number_lot?: string;
  conformity?: TYPE_CONFORMITY | null;
}
