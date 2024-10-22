import { Delivery } from "@prisma/client";
import { UpdateDeliveryDto } from "../dto/update-delivery.dto";

export interface IDelivery {
  create(values: Delivery): Promise<Delivery>;
  update(id: number, values: UpdateDeliveryDto): Promise<Delivery>;
  findAll(): Promise<Delivery[] | null>;
  MyDeliverys(d: any): Promise<Delivery[] | null>;
  findOne(supplierId: number): Promise<Delivery | null>;
  remove(value: number): Promise<Delivery>;
}