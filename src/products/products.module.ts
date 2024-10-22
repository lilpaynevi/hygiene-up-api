import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProductsController],
  providers: [
    PrismaService,
    {
      useClass: ProductsService,
      provide: 'IProducts',
    },
  ],
})
export class ProductsModule {}
