import { PrismaService } from 'src/prisma/prisma.service';
import { PostService } from './post.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('post')
export class PostController {
  constructor(
    private prismaService: PrismaService,
    private postService: PostService,
  ) {}

  @Post('/createPost')
  async createPost(
    @Body()
    data: {
      title: string;
      contents: string;
      categoryId: number;
    },
  ): Promise<{
    id: number;
    title: string;
    contents: string;
    img: string;
    categoryId: number;
    createdAt: Date;
    updatedAt: Date;
  }> {
    return await this.postService.createPost(data);
  }
}
