import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { IEquipment } from './interfaces/equipment.interfaces';

@Injectable()
export class EquipmentsService implements IEquipment {
  constructor(private readonly prisma: PrismaService){}

  create(createEquipmentDto: CreateEquipmentDto) {
    return this.prisma.equipments.create({
      data: createEquipmentDto
    })
  }

  findAll() {
    return this.prisma.equipments.findMany({
      orderBy: {
        title: 'asc'
      }
    })
  }

  MyEquipments(user: any) {
    return this.prisma.equipments.findMany({
      where: {
        restaurantId: user.sub
      },
      include: {
        type_equipment: true
      },
      orderBy: {
        title: 'asc'
      }
    })
  }

  findOne(id: string) {
    return this.prisma.equipments.findUnique({
      where:{
        id
      }
    })
  }

  update(id: string, updateEquipmentDto: UpdateEquipmentDto) {
    return this.prisma.equipments.update({
      data: updateEquipmentDto,
      where:{
        id
      }
    })
  }

  remove(id: string) {
    return this.prisma.equipments.delete({
      where: {
        id
      }
    })
  }
}
