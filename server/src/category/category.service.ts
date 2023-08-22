import { Injectable } from '@nestjs/common';
import { Category } from '@prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  async createCategory(data: string): Promise<Category> {
    return await this.prismaService.category.create({ data: { title: data } });
  }

  async categoryList(): Promise<Category[]> {
    return this.prismaService.category.findMany();
  }
}
