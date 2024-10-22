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
    return this.prisma.products.findMany({})
  }

  MyProducts(user: any) {
    return this.prisma.products.findMany({
      where: {
        restaurantId: user.sub
      }
    })
  }

  findOne(id: number) {
    return this.prisma.products.findUnique({
      where : {
        id
      }
    })
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
