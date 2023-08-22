import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryService } from './category.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Category } from '@prisma';

@Controller('category')
export class CategoryController {
  constructor(
    private prismaService: PrismaService,
    private categoryService: CategoryService,
  ) {}

  @Post('/creatCategory')
  async createCategory(@Body() data: string): Promise<Category> {
    return await this.categoryService.createCategory(data);
  }

  @Get()
  async categoryList(): Promise<Category[]> {
    return await this.categoryService.categoryList();
  }
}
