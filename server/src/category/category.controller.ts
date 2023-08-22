import { CategoryService } from './category.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Category } from '@prisma';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post('/createCategory')
  async createCategory(@Body() data: Category): Promise<Category> {
    return await this.categoryService.createCategory(data);
  }

  @Get()
  async categoryList(): Promise<Category[]> {
    return await this.categoryService.categoryList();
  }
}
