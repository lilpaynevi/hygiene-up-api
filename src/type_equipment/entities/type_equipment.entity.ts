import { Equipments, MODULES } from '@prisma/client';

import { IsString, IsUUID, IsNumber, IsEnum, isNumber } from 'class-validator';

export class TypeEquipmentEntity {
  @IsNumber()
  id?: number;

  @IsString()
  title: string;

  @IsNumber()
  max: number;

  @IsNumber()
  min: number;

  @IsString()
  between_desc: string;

  Equipments?: Equipments[];
}
