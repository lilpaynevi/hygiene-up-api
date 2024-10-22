import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { RestaurantsService } from 'src/restaurants/restaurants.service';
import { RestaurantsModule } from 'src/restaurants/restaurants.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth.strategy';
dotenv.config();

@Module({
  imports:[RestaurantsModule,
    ConfigModule.forRoot(),
    PassportModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      // signOptions: { expiresIn: '1h' }, // Optionnel : définis la durée de validité des tokens
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, RestaurantsService , JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
