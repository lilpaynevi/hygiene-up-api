import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ROLES_USERS } from '@prisma/client';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    firstName: string
    lastName: string
    restaurantId: string;
    roles: ROLES_USERS[];
}
