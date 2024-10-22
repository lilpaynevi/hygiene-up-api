import { Restaurant } from '@prisma/client';
import { CreateRestaurantDto } from '../dto/create-restaurant.dto';
import { UpdateRestaurantDto } from '../dto/update-restaurant.dto';

export interface IRestaurant {
  create(data: CreateRestaurantDto): Promise<Restaurant>;
  findAll(): Promise<Restaurant[]>;
  findOne(id: string): Promise<Restaurant | null>;
  update(id: string, data: Object): Promise<Restaurant | null>;
  remove(id: string): Promise<Restaurant | null>;
  findByUsername(username: string): Promise<Restaurant | null>;
}
