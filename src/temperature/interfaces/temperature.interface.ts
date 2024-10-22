import { Temperature } from '@prisma/client';
import { CreateTemperatureDto } from '../dto/create-temperature.dto';
import { UpdateTemperatureDto } from '../dto/update-temperature.dto';

export interface ITemperature {
  create(data: CreateTemperatureDto): Promise<Temperature>;
  findAll(): Promise<Temperature[]>;
  MyTemperatures(t: object): Promise<Temperature[] | null>;
  findOne(id: number): Promise<Temperature | null>;
  update(id: number, data: UpdateTemperatureDto): Promise<Temperature>;
  remove(id: number): Promise<Temperature>;
}
