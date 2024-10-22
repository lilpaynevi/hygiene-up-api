import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ITypeEquipment } from './interfaces/type_equipment.interface';
import { TypeEquipmentEntity } from './entities/type_equipment.entity';

@Injectable()
export class TypeEquipmentService implements ITypeEquipment {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<TypeEquipmentEntity[]> {
    return this.prisma.type_Equipment.findMany({});
  }

  findOne(id: number): Promise<TypeEquipmentEntity | null> {
    return this.prisma.type_Equipment.findUnique({
      where: {
        id: Number(id),
      },
    });
  }
}
