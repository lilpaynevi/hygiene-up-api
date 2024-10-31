import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { TemperatureModule } from './temperature/temperature.module';
import { UsersModule } from './users/users.module';
import { EquipmentsModule } from './equipments/equipments.module';
import { AuthModule } from './auth/auth.module';
import { TypeEquipmentModule } from './type_equipment/type_equipment.module';
import { CleaningModule } from './cleaning/cleaning.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { DeliveryModule } from './delivery/delivery.module';
import { ProductsModule } from './products/products.module';
import { TracabilityModule } from './tracability/tracability.module';
import { FilesModule } from './files/files.module';
import { OilModule } from './oil/oil.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: ['.env.development'],
    }),
    PrismaModule,
    RestaurantsModule,
    TemperatureModule,
    UsersModule,
    EquipmentsModule,
    AuthModule,
    TypeEquipmentModule,
    CleaningModule,
    SuppliersModule,
    DeliveryModule,
    ProductsModule,
    TracabilityModule,
    FilesModule,
    OilModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
