import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { TypeEquipmentService } from './type_equipment.service';
import { ITypeEquipment } from './interfaces/type_equipment.interface';
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger';

@ApiBasicAuth()
@ApiTags('Type Equipment')

@Controller('type-equipment')
export class TypeEquipmentController {
  constructor(
    @Inject('ITypeEquipment')
    private readonly typeEquipmentService: ITypeEquipment,
  ) {}

  @Get()
  findAll() {
    return this.typeEquipmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.typeEquipmentService.findOne(id);
  }
}
