import { Injectable } from '@nestjs/common';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { IDelivery } from './interfaces/delivery.interfaces';
import { PrismaService } from 'src/prisma/prisma.service';
import { Delivery } from '@prisma/client';

@Injectable()
export class DeliveryService implements IDelivery {
  constructor(private readonly prisma: PrismaService) {}

  create(c: Delivery): Promise<Delivery> {
    return this.prisma.delivery.create({ data: c });
  }

  findAll(): Promise<Delivery[]> {
    return this.prisma.delivery.findMany({});
  }

  async MyDeliverys(user: any): Promise<any> {
    return this.prisma.delivery.findMany({
      where: {
        restaurantId: user.sub,
      },
    });
  }

  findOne(id: number): Promise<Delivery | null> {
    return this.prisma.delivery.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateDeliveryDto: UpdateDeliveryDto): Promise<Delivery> {
    return this.prisma.delivery.update({
      data: updateDeliveryDto,
      where: { id: id },
    });
  }

  remove(id: number): Promise<Delivery> {
    return this.prisma.delivery.delete({
      where: { id: id },
    });
  }
}
