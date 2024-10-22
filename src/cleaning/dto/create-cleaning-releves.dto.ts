import { JsonValue } from "@prisma/client/runtime/library";

export class CreateCleaningRelevesDto {
  id?: string;
  restaurantId: string;
  data: JsonValue[];
}
