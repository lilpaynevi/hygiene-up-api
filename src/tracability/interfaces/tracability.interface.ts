import { CreateTracabilityDto } from '../dto/create-tracability.dto';
import { UpdateTracabilityDto } from '../dto/update-tracability.dto';

export interface ITracability {
  create(data: CreateTracabilityDto): Promise<CreateTracabilityDto>;
  findAll(): Promise<CreateTracabilityDto[]>;
  MyTracability(t: any): Promise<CreateTracabilityDto[] | null>;
  findOne(id: number): Promise<CreateTracabilityDto | null>;
  update(id: number, data: UpdateTracabilityDto): Promise<CreateTracabilityDto>;
  remove(id: number): Promise<CreateTracabilityDto>;
  uploadFiles(files: any): Promise<any>;
}
