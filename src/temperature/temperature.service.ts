import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTemperatureDto } from './dto/create-temperature.dto';
import { ITemperature } from './interfaces/temperature.interface';
import { Surfaces, Temperature } from '@prisma/client'; // Assume que Prisma génère ce type
import { UpdateTemperatureDto } from './dto/update-temperature.dto';

@Injectable()
export class TemperatureService implements ITemperature {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTemperatureDto): Promise<Temperature> {
    return this.prisma.temperature.create({
      data,
    });
  }

  async findAll(): Promise<Temperature[]> {
    return this.prisma.temperature.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async MyTemperatures(t: any): Promise<Temperature[] | null> {
    return this.prisma.temperature.findMany({
      where: { restaurantId: t.sub },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number): Promise<Temperature | null> {
    return this.prisma.temperature.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateTemperatureDto): Promise<Temperature> {
    return this.prisma.temperature.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Temperature> {
    return this.prisma.temperature.delete({
      where: { id },
    });
  }
}
