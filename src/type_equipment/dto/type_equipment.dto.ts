import { Equipments } from '@prisma/client';
import { IEquipment } from 'src/equipments/interfaces/equipment.interfaces';

export interface TypeEquipmentDto {
  id?: number;
  title: string;
  max: number;
  min: number;
  between_desc: string;
  Equipments?: Equipments[];
}
