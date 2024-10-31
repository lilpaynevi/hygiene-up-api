// src/auth/auth.controller.ts
import { Controller, Post, Body, Get, Req, UseGuards, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateRestaurantDto } from '../restaurants/dto/create-restaurant.dto';
import { LoginUserDto } from '../restaurants/dto/login-restaurant-dto';
import { JwtAuthGuard } from './auth.guard';
import { GetUser } from 'src/decorator/get-user.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Post('register')
  async register(@Body() loginUserDto: LoginUserDto) {
    return this.authService.register(loginUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  getProfile(@GetUser() user: any) {
    return this.authService.getProfile(user);
  }
}
