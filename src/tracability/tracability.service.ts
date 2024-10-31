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
    return this.prisma.tracability.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  MyTracability(user: any) {
    return this.prisma.tracability.findMany({
      where: {
        restaurantId: user.sub,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  uploadFiles(files: any) {
    return { filename: 'dzdz', files };
  }

  findOne(id: string) {
    return this.prisma.tracability.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateTracabilityDto: UpdateTracabilityDto) {
    return this.prisma.tracability.update({
      data: updateTracabilityDto,
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.tracability.delete({
      where: {
        id,
      },
    });
  }
}
