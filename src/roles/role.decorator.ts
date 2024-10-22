import { SetMetadata } from '@nestjs/common';

export enum Role {
  OWNER = 'ADMIN',
  STAFF = 'USER',
}

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
export const IsPublic = () => SetMetadata('isPublic', true);
export const IsPrivate = () => SetMetadata('isPublic', false);
