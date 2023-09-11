import { Post } from '@prisma';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Posts } from './post.controller';
@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  async createPost(data: Posts): Promise<Posts> {
    return await this.prismaService.post.create({
      data: {
        title: data.title,
        contents: data.contents,
        categoryId: Number(data.categoryId),
      },
    });
  }

  async postList(): Promise<Post[]> {
    return await this.prismaService.post.findMany();
  }

  async categoryPost(id: string): Promise<Posts[]> {
    return await this.prismaService.post.findMany({
      where: { categoryId: Number(id) },
    });
  }

  async targetPost(id: string): Promise<any> {
    return await this.prismaService.post.findUnique({
      where: { id: Number(id) },
    });
  }
}
