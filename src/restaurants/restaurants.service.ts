import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { IRestaurant } from './interfaces/restaurants.interface';
import { Restaurant } from '@prisma/client';
import * as bcrypt from 'bcrypt';


@Injectable()
export class RestaurantsService implements IRestaurant {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const existingUser = await this.findByUsername(createRestaurantDto.username);
    if (existingUser) {
      throw new BadRequestException('username already exists');
    }
    const hashedPassword = await bcrypt.hash(createRestaurantDto.password, 10);
    const newRestaurant = {
      ...createRestaurantDto,
      password: hashedPassword,
    }
    return this.prisma.restaurant.create({
      data: newRestaurant,
    });
  }

  findAll(): Promise<Restaurant[]> {
    return this.prisma.restaurant.findMany({
      include:{
        User: true,
        Temperature: true,
        Equipments: true,
        Staffers: true,
        Suppliers: true, 
        Surfaces: true
      },
      orderBy: {
        username: 'desc'
      }
    });
  }

  findOne(id: string): Promise<Restaurant | null> {
    return this.prisma.restaurant.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateRestaurantDto: UpdateRestaurantDto): Promise<any> {
    return this.prisma.restaurant.update({
      where: { id },
      data: updateRestaurantDto
    });
  }

  remove(id: string): Promise<any> {
    return this.prisma.restaurant.deleteMany({
      where: {
        id,
      },
    });
  }

  async findByUsername(username: string): Promise<Restaurant | null> {
    return this.prisma.restaurant.findUnique({
      where: { username: username },
    });
  }
}
