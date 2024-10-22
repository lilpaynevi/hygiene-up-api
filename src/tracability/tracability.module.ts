import { Module } from '@nestjs/common';
import { TracabilityService } from './tracability.service';
import { TracabilityController } from './tracability.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TracabilityController],
  providers: [
    PrismaService,
    {
      provide: 'ITracability',
      useClass: TracabilityService,
    },
  ],
})
export class TracabilityModule {}
