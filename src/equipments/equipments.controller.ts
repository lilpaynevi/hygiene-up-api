import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, UseGuards } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { IEquipment } from './interfaces/equipment.interfaces';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/decorator/get-user.decorator';

@Controller('equipments')
export class EquipmentsController {
  constructor(@Inject('IEquipment') private readonly equipmentsService: IEquipment) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentsService.create(createEquipmentDto);
  }

  @Get()
  findAll() {
    return this.equipmentsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  MyEquipments(@GetUser() user: any) {
    return this.equipmentsService.MyEquipments(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentsService.update(id, updateEquipmentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentsService.remove(id);
  }
}
