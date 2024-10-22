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
import { TracabilityService } from './tracability.service';
import { CreateTracabilityDto } from './dto/create-tracability.dto';
import { UpdateTracabilityDto } from './dto/update-tracability.dto';
import { ITracability } from './interfaces/tracability.interface';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/decorator/get-user.decorator';

@Controller('tracability')
export class TracabilityController {
  constructor(
    @Inject('ITracability') private readonly tracabilityService: ITracability,
  ) {}

  @Post()
  create(@Body() createTracabilityDto: CreateTracabilityDto) {
    return this.tracabilityService.create(createTracabilityDto);
  }

  @Get()
  findAll() {
    return this.tracabilityService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  MyTracability(@GetUser() user: any) {
    return this.tracabilityService.MyTracability(user);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tracabilityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTracabilityDto: UpdateTracabilityDto,
  ) {
    return this.tracabilityService.update(+id, updateTracabilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tracabilityService.remove(+id);
  }
}
