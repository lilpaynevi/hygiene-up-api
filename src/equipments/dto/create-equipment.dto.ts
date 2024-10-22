import { MODULES } from "@prisma/client"

import { IsString, IsUUID, IsNumber, IsEnum } from 'class-validator';

export class CreateEquipmentDto {
  @IsUUID() 
  id: string;

  @IsString() 
  title: string;

  @IsEnum(MODULES)
  linkTo: MODULES;

  @IsNumber() 
  type_EquipmentId: number;

  type_equipement?: {
    id?: string;
    title: string;
    max: number;
    min: number;
    between_desc: string;
  };

  @IsUUID() 
  restaurantId: string;
}
