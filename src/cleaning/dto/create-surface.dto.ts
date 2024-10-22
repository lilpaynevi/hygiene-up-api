import { TYPE_FREQUENCY } from "@prisma/client";

export class CreateSurfaceDto {
  id: number;
  surface: string;
  zoneId: string;
  restaurantId: string;
  frequencyQuantity: number | null;
  frequencyType: TYPE_FREQUENCY| null;
}
