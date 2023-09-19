import { Response, Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostService } from './post.service';
// eslint-disable-next-line prettier/prettier
import { Controller, Post, Body, Get, Req, Param, Patch, Delete } from '@nestjs/common';

export interface Posts {
  id: number;
  title: string;
  contents: string;
  desc: string;
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

  @Post('/write')
  async createPost(
    @Body()
    data: Posts,
  ): Promise<Posts> {
    return await this.postService.createPost(data);
  }

  @Patch('/update')
  async updatePost(@Body() data: Posts) {
    return await this.postService.updatePost(data);
  }

  @Get('/all')
  async postList(): Promise<Posts[]> {
    return await this.postService.postList();
  }

  @Get('/categoryPosts/:id')
  async categoryPost(@Param('id') id: string): Promise<Posts[]> {
    return await this.postService.categoryPost(id);
  }

  @Get('/id/:id')
  async targetPost(@Param('id') id: string): Promise<any> {
    return await this.postService.targetPost(id);
  }

  @Delete('/delete/:id')
  async deletePost(@Param('id') id: string): Promise<any> {
    return await this.postService.deletePost(id);
  }
}
