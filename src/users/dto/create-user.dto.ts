import { ROLES_USERS } from '@prisma/client';
import { CreateRestaurantDto } from 'src/restaurants/dto/create-restaurant.dto';

export class CreateUserDto {
  id: string;
  firstName: string
  lastName: string
  restaurantId: string;
  roles: ROLES_USERS[];
}

// enum ROLES_USERS {
//     OWNER,
//     EDITOR,
//     STAFF
//   }
  