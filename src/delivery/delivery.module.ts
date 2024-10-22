import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DeliveryController],
  providers: [
    PrismaService,
    {
      useClass: DeliveryService,
      provide: 'IDelivery',
    },
  ],
})
export class DeliveryModule {}
