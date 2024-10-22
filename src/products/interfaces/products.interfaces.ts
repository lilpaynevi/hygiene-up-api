import { CreateProductDto } from '../dto/create-product.dto';

export interface IProducts {
  create(data: CreateProductDto): Promise<CreateProductDto>;
  update(id: number, data: CreateProductDto): Promise<CreateProductDto>;
  findAll(): Promise<CreateProductDto[] | null>;
  findOne(id: number): Promise<CreateProductDto | null>;
  MyProducts(userId: any): Promise<CreateProductDto[] | null>;
  remove(id: number): Promise<CreateProductDto | null>;
}
