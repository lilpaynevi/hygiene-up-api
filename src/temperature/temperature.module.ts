import { Module } from '@nestjs/common';
import { TemperatureService } from './temperature.service';
import { TemperatureController } from './temperature.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TemperatureController],
  providers: [
    PrismaService,
    {
      provide: 'ITemperature',
      useClass: TemperatureService, 
    },
  ],
})
export class TemperatureModule {}
