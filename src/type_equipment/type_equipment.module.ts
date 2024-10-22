import { Module } from '@nestjs/common';
import { TypeEquipmentService } from './type_equipment.service';
import { TypeEquipmentController } from './type_equipment.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TypeEquipmentController],
  providers: [
    PrismaService,
    {
      provide: 'ITypeEquipment',
      useClass: TypeEquipmentService, 
    },
  ],
})
export class TypeEquipmentModule {}
