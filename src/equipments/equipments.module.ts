import { Module } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';
import { EquipmentsController } from './equipments.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EquipmentsController],
  providers: [
    PrismaService,
    {
      provide: 'IEquipment',
      useClass: EquipmentsService, 
    },
  ],
})
export class EquipmentsModule {}
