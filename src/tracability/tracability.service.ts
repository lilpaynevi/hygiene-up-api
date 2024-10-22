import { Injectable } from '@nestjs/common';
import { CreateTracabilityDto } from './dto/create-tracability.dto';
import { UpdateTracabilityDto } from './dto/update-tracability.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TracabilityService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTracabilityDto) {
    return this.prisma.tracability.create({
      data,
    });
  }

  findAll() {
    return this.prisma.tracability.findMany({});
  }

  MyTracability(user: any) {
    return this.prisma.tracability.findMany({
      where: {
        restaurantId: user.sub,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.tracability.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateTracabilityDto: UpdateTracabilityDto) {
    return this.prisma.tracability.update({
      data: updateTracabilityDto,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.tracability.delete({
      where: {
        id,
      },
    });
  }
}
