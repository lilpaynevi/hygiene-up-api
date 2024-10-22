export class CreateDeliveryDto {
  id?: number;
  createdAt: Date;
  updatedAt: Date;
  restaurantId: string;
  comments: string;
  suppliersId: number;
  type_ProductsId: number | null;
  productsId: number | null;
  number_lot: string | null;
  conformity: TYPE_CONFORMITY | null;
}

export enum TYPE_CONFORMITY {
  QUANTITY_NO_CONFORMITY = 'QUANTITY_NO_CONFORMITY',
  DLC_SHORT = 'DLC_SHORT',
  DLC_DEPASSED = 'DLC_DEPASSED',
  ABS_NUMBER_AGREMENT = 'ABS_NUMBER_AGREMENT',
  PACKAGE_PERCE = 'PACKAGE_PERCE',
  PACKAGE_ENDOMMAGED = 'PACKAGE_ENDOMMAGED',
  DENREE_IMPROPRES = 'DENREE_IMPROPRES',
  TEMP_CAR_NO_CONFORMITY = 'TEMP_CAR_NO_CONFORMITY',
  CAR_IMPROPRE = 'CAR_IMPROPRE',
  TEMP_DELIVERY_NO_CONFORMITY = 'TEMP_DELIVERY_NO_CONFORMITY',
}
