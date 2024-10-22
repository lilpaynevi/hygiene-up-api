import { CreateSupplierDto } from '../dto/create-supplier.dto';

export interface ISuppliers {
  create(values: CreateSupplierDto): Promise<CreateSupplierDto>;
  update(id: number, values: CreateSupplierDto): Promise<CreateSupplierDto>;
  findAll(): Promise<CreateSupplierDto[] | null>;
  MySuppliers(d: any): Promise<CreateSupplierDto[] | null>;
  findOne(supplierId: number): Promise<CreateSupplierDto | null>;
  remove(value: number): Promise<CreateSupplierDto>;
}
