import { Equipments } from '@prisma/client';
import { IEquipment } from 'src/equipments/interfaces/equipment.interfaces';
import { TypeEquipmentEntity } from '../entities/type_equipment.entity';

export interface ITypeEquipment {
  findAll(): Promise<TypeEquipmentEntity[]>;
  findOne(id: number): Promise<TypeEquipmentEntity | null>;
}
