import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateProductDto) {
    return this.prisma.products.create({
      data,
    });
  }

  findAll() {
    return this.prisma.products.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  MyProducts(user: any) {
    return this.prisma.products.findMany({
      where: {
        restaurantId: user.sub,
      },
      orderBy: {
        name: 'asc',
      },
    });
  }

  TypeProducts() {
    return this.prisma.type_Products.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.products.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.products.update({
      data: updateProductDto,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.products.delete({
      where: {
        id,
      },
    });
  }
}
