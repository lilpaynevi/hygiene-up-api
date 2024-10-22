import { PartialType } from '@nestjs/swagger';
import { CreateTracabilityDto } from './create-tracability.dto';

export class UpdateTracabilityDto extends PartialType(CreateTracabilityDto) {
  id?: number;
  data: object[];
  restaurantId: string;
}
