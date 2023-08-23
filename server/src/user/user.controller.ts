import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Controller, Param, Get, Put, Delete, Body } from '@nestjs/common';
import { User } from '@prisma';

@Controller('user')
export class UserController {
  constructor(
    private prismaService: PrismaService,
    private userService: UserService,
  ) {}

  @Get('/all')
  async findAllUsers(): Promise<User[]> {
    return await this.userService.findAllUsers();
  }

  @Get('/id/:id')
  async findUser(@Param('id') id: number): Promise<User | null> {
    return await this.userService.findUser(id);
  }

  // email 중복검사
  @Get('/email/:email')
  async findUserByEmail(@Param('email') email: string): Promise<boolean> {
    return await this.userService.findUserByEmail(email);
  }

  @Put('/id/:id')
  // eslint-disable-next-line prettier/prettier
  async updateUser(@Param('id') id: number, @Body() data: User): Promise<User | null> {
    return await this.userService.updateUser(id, data.email);
  }

  @Delete('/id/:id')
  async deleteUser(@Param('id') id: number): Promise<User | null> {
    return await this.userService.deleteUser(id);
  }
}
