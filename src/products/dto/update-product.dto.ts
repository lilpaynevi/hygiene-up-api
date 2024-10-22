import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    id?: number;
    name: string;
    type_ProductsId: number;
    isDLC?: boolean;
    quantityDLC?: number;
    typeQuantityDLC?: string;
    restaurantId: string;
    isFinished?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
