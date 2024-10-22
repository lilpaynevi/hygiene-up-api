import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  UseGuards,
} from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { IDelivery } from './interfaces/delivery.interfaces';
import { GetUser } from 'src/decorator/get-user.decorator';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Delivery } from '@prisma/client';

@Controller('delivery')
export class DeliveryController {
  constructor(
    @Inject('IDelivery') private readonly deliverysService: IDelivery,
  ) {}

  @Post()
  create(@Body() createDeliveryDto: Delivery) {
    return this.deliverysService.create(createDeliveryDto);
  }

  @Get()
  findAll() {
    return this.deliverysService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  MyDeliverys(@GetUser() user: any) {
    return this.deliverysService.MyDeliverys(user);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.deliverysService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateDeliveryDto: UpdateDeliveryDto,
  ) {
    return this.deliverysService.update(+id, updateDeliveryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.deliverysService.remove(+id);
  }
}
