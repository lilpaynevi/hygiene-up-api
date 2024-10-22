import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [
    PrismaService,
    {
      provide: 'IUsersService',
      useClass: UsersService, 
    },
  ],
})
export class UsersModule {}
