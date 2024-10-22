import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { IRestaurant } from './interfaces/restaurants.interface';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [RestaurantsController],
  providers: [
    PrismaService,
    {
      provide: 'IRestaurant',
      useClass: RestaurantsService, 
    },
  ],
})
export class RestaurantsModule {}
