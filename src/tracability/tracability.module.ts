import { Module } from '@nestjs/common';
import { TracabilityService } from './tracability.service';
import { TracabilityController } from './tracability.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { FILE_FOLDER_DIR } from 'constants/constants';

@Module({
  imports: [
    MulterModule.register({
      dest: FILE_FOLDER_DIR,
    }),
  ],
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
