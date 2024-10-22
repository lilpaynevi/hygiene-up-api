import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUsersService } from './interfaces/users.interfaces';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService implements IUsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  MyUsers(user: any): Promise<User[] | null> {
    return this.prisma.user.findMany({
      where: {
        restaurantId: user.sub,
      },
    });
  }

  findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return this.prisma.user.update({
      data: updateUserDto,
      where: {
        id,
      },
    });
  }

  remove(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
