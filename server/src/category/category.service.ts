import { Injectable } from '@nestjs/common';
import { Category } from '@prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  async createCategory(data: Category): Promise<Category> {
    return await this.prismaService.category.create({
      data: { title: data.title },
    });
  }

  async categoryList(): Promise<Category[]> {
    return await this.prismaService.category.findMany();
  }

  async editCategory(data: Category): Promise<any> {
    return await this.prismaService.category.update({
      where: { id: data.id },
      data: { title: data.title },
    });
  }

  async deleteCategory(data: { id: number }): Promise<Category> {
    const result = await this.prismaService.category.delete({
      where: { id: data.id },
    });
    return result;
  }
}
