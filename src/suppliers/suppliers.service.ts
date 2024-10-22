import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { ISuppliers } from './interfaces/suppliers.interfaces';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SuppliersService implements ISuppliers {
  constructor(private readonly prisma: PrismaService) {}

  create(createSupplierDto: CreateSupplierDto) {
    return this.prisma.suppliers.create({ data: createSupplierDto });
  }

  findAll() {
    return this.prisma.suppliers.findMany({});
  }

  MySuppliers(user: any) {
    return this.prisma.suppliers.findMany({
      where: {
        restaurantId: user.sub,
      },
    });
  }

  findOne(id: number): Promise<CreateSupplierDto | null> {
    return this.prisma.suppliers.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return this.prisma.suppliers.update({
      data: updateSupplierDto,
      where: { id: id },
    });
  }

  remove(id: number) {
    return this.prisma.suppliers.delete({
      where: { id: id },
    });
  }
}
