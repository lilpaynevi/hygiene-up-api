import { User } from "@prisma/client";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";

export interface IUsersService {
    create(data: CreateUserDto): Promise<User>
    findAll(): Promise<User[]>
    MyUsers(user: any): Promise<User[] | null>
    findOne(id: string): Promise<User | null>
    update(id: string, data: UpdateUserDto): Promise<User | null>
    remove(id: string): Promise<User>
}