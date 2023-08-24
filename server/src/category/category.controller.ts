import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryService } from './category.service';
import { Body, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { Category } from '@prisma';

@Controller('category')
export class CategoryController {
  constructor(
    private prismaService: PrismaService,
    private categoryService: CategoryService,
  ) {}

  @Post('/createCategory')
  async createCategory(@Body() data: Category): Promise<Category> {
    return await this.categoryService.createCategory(data);
  }

  @Get('/all')
  async categoryList(): Promise<Category[]> {
    return await this.categoryService.categoryList();
  }

  @Put('/edit')
  async editCategory(@Body() data: Category): Promise<Category[]> {
    return await this.categoryService.editCategory(data);
  }

  @Delete('/delete')
  async deleteCategory(@Body() data: { id: number }): Promise<Category> {
    return await this.categoryService.deleteCategory(data);
  }
}
