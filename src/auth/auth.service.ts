// src/auth/auth.service.ts
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from '../restaurants/dto/login-restaurant-dto';
import { IRestaurant } from '../restaurants/interfaces/restaurants.interface';
import * as bcrypt from 'bcrypt';
import { Restaurant } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RestaurantsService } from 'src/restaurants/restaurants.service';
import { CreateRestaurantDto } from 'src/restaurants/dto/create-restaurant.dto';
import { jwtDecode } from 'jwt-decode';

@Injectable()
export class AuthService {
  constructor(
    private readonly repository: RestaurantsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginUserDto: LoginUserDto): Promise<Restaurant | null> {
    const user = await this.repository.findByUsername(loginUserDto.username);
    if (user && (await bcrypt.compare(loginUserDto.password, user.password))) {
      return user;
    }
    return null;
  }

  async login(loginUserDto: LoginUserDto): Promise<object> {
    const user = await this.validateUser(loginUserDto);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(data: CreateRestaurantDto) {
    return this.repository.create(data);
  }

  async getProfile(req: any): Promise<any> {
    return req
  }
}
