import { User } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';

export interface UserResponse {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface IUserService {
  createUser(createUserDto: CreateUserDto): Promise<UserResponse>;

  findUserByEmail(email: string): Promise<User | null>;
}
