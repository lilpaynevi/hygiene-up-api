import { Injectable } from '@nestjs/common';
import { CreateCleaningDto } from './dto/create-cleaning.dto';
import { UpdateCleaningDto } from './dto/update-cleaning.dto';
import { ICleanings } from './interfaces/cleaning.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSurfaceDto } from './dto/create-surface.dto';
import { CreateCleaningRelevesDto } from './dto/create-cleaning-releves.dto';

@Injectable()
export class CleaningService implements ICleanings {
  constructor(private readonly prisma: PrismaService) {}

  //** */ RELEVES

  createReleve(releve: any) {
    return this.prisma.cleaning.create({
      data: releve,
    });
  }
  
  MyReleves(user: any) {
    console.log(user);
    return this.prisma.cleaning.findMany({
      where: { restaurantId: user.sub },
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  MyZones(user: any) {
    console.log(user);
    return this.prisma.zones.findMany({
      where: { restaurantId: user.sub },
      include: {
        Surfaces: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  //** */ ZONES
  create(createCleaningDto: CreateCleaningDto) {
    return this.prisma.zones.create({ data: createCleaningDto });
  }

  findOne(id: string) {
    return this.prisma.zones.findUnique({
      where: { id },
      include: {
        Surfaces: true,
      },
    });
  }

  findAll() {
    return this.prisma.zones.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  update(id: string, updateCleaningDto: UpdateCleaningDto) {
    return this.prisma.zones.update({
      where: { id },
      data: updateCleaningDto,
    });
  }

  remove(id: string) {
    return this.prisma.zones.delete({
      where: { id },
    });
  }

  //** */ SURFACES **

  createSurface(d: CreateSurfaceDto) {
    d.frequencyQuantity = Number(d.frequencyQuantity);
    return this.prisma.surfaces.create({
      data: d,
    });
  }

  deleteSurface(id: number) {
    return this.prisma.surfaces.delete({
      where: {
        id: Number(id),
      },
    });
  }

  MySurfacesById(zoneId: string) {
    return this.prisma.surfaces.findMany({
      where: { zoneId: zoneId },
    });
  }
}
