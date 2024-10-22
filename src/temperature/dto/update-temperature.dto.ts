import { PartialType } from '@nestjs/mapped-types';
import { CreateTemperatureDto } from './create-temperature.dto';
import { JsonValue } from '@prisma/client/runtime/library';

export class UpdateTemperatureDto extends PartialType(CreateTemperatureDto) {
  data: object[]
  restaurantId: string
}
