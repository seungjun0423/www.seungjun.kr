import { PrismaService } from 'src/prisma/prisma.service';
import { PostService } from './post.service';
import { Controller, Post, Body, Get } from '@nestjs/common';

export interface Posts {
  id: number;
  title: string;
  contents: string;
  img?: string;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
}

@Controller('post')
export default class PostController {
  constructor(
    private prismaService: PrismaService,
    private postService: PostService,
  ) {}

  @Post('/createPost')
  async createPost(
    @Body()
    data: Posts,
  ): Promise<Posts> {
    return await this.postService.createPost(data);
  }

  @Get('/all')
  async postList(): Promise<Posts[]> {
    return await this.postService.postList();
  }
  @Post('/categoryPosts')
  async categoryPost(@Body() data: { categoryId: number }): Promise<Posts[]> {
    return await this.postService.categoryPost(data);
  }
}
