import { Module } from '@nestjs/common';
import { CleaningService } from './cleaning.service';
import { CleaningController } from './cleaning.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CleaningController],
  providers: [
    PrismaService,
    {
      provide: 'ICleaning',
      useClass: CleaningService,
    },
  ],
})
export class CleaningModule {}
