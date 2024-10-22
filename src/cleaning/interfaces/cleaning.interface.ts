import { Cleaning, Zones } from '@prisma/client';
import { CreateCleaningRelevesDto } from '../dto/create-cleaning-releves.dto';
import { CreateCleaningDto } from '../dto/create-cleaning.dto';
import { CreateSurfaceDto } from '../dto/create-surface.dto';
import { UpdateCleaningDto } from '../dto/update-cleaning.dto';
// import { Cleaning } from '../entities/cleaning.entity';

type Surface = {
  id?: number;
  surface: string;
  zoneId: string;
  restaurantId: string | null;
};

export interface ICleanings {
  create(data: CreateCleaningDto): Promise<Zones>;
  createSurface(data: CreateSurfaceDto): Promise<Surface>;
  MySurfacesById(zoneId: string): Promise<Surface[] | null>
  deleteSurface(id: number): Promise<Surface>;
  createReleve(releve: Cleaning): Promise<Cleaning>;
  findAll(): Promise<Zones[]>;
  MyZones(userId : any): Promise<Zones[] | null>;
  MyReleves(userId : any): Promise<CreateCleaningRelevesDto[] | null>;
  findOne(id: string): Promise<Zones | null>;
  update(id: string, data: UpdateCleaningDto): Promise<Zones | null>;
  remove(id: string): Promise<Zones | null>;
}
