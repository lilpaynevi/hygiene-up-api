import { Equipments } from "@prisma/client";
import { CreateEquipmentDto } from "../dto/create-equipment.dto";
import { UpdateEquipmentDto } from "../dto/update-equipment.dto";

export interface IEquipment {
    create(data: CreateEquipmentDto): Promise<Equipments>
    findAll(): Promise<Equipments[]>
    MyEquipments(d: any): Promise<Equipments[] | null>
    findOne(id: string): Promise<Equipments | null>
    update(id: string, data: UpdateEquipmentDto): Promise<Equipments | null>
    remove(id: string): Promise<Equipments | null>
} 