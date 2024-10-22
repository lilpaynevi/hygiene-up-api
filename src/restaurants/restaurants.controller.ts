import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { IRestaurant } from './interfaces/restaurants.interface';

@Controller('restaurants')
export class RestaurantsController {
  constructor(
    @Inject('IRestaurant') private readonly restaurantsRepository: IRestaurant,
  ) {}

  @Post()
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantsRepository.create(createRestaurantDto);
  }

  @Get()
  findAll() {
    return this.restaurantsRepository.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantsRepository.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ) {
    return this.restaurantsRepository.update(id, updateRestaurantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantsRepository.remove(id);
  }
}
