import { Post } from '@prisma';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  async createPost(data: {
    title: string;
    contents: string;
    categoryId: number;
  }): Promise<Post> {
    return await this.prismaService.post.create({
      data: {
        title: data.title,
        contents: data.contents,
        categoryId: data.categoryId,
      },
    });
  }
}
