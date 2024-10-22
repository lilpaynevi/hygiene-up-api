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
import { TemperatureService } from './temperature.service';
import { CreateTemperatureDto } from './dto/create-temperature.dto';
import { UpdateTemperatureDto } from './dto/update-temperature.dto';
import { ITemperature } from './interfaces/temperature.interface';
import { GetUser } from 'src/decorator/get-user.decorator';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('temperature')
export class TemperatureController {
  constructor(
    @Inject('ITemperature') private readonly temperatureService: ITemperature,
  ) {}

  @Post()
  create(@Body() createTemperatureDto: CreateTemperatureDto) {
    return this.temperatureService.create(createTemperatureDto);
  }

  @Get()
  findAll() {
    return this.temperatureService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  MyTemperatures(@GetUser() user:any) {
    return this.temperatureService.MyTemperatures(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.temperatureService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTemperatureDto: UpdateTemperatureDto,
  ) {
    return this.temperatureService.update(+id, updateTemperatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.temperatureService.remove(+id);
  }
}
