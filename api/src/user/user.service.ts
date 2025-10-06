import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  IUserService,
  UserResponse,
} from './interfaces/user-service.interface';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService implements IUserService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserResponse> {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });

    // Omit the password from the response
    const userWithoutPassword = { ...user };
    delete userWithoutPassword.password;

    return {
      message: 'User registered successfully',
      user: {
        id: user.userId,
        name: user.name,
        email: user.email,
      },
    };
  }

  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
