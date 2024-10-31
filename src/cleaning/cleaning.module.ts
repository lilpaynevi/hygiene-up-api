import { Module } from '@nestjs/common';
import { CleaningService } from './cleaning.service';
import { CleaningController } from './cleaning.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { MulterModule } from '@nestjs/platform-express';
import { FILE_FOLDER_DIR } from 'constants/constants';

@Module({
  imports: [
    MulterModule.register({
      dest: FILE_FOLDER_DIR,
    }),
  ],
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
