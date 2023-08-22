import { Post } from '@prisma';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  async createPost(data: any): Promise<Post> {
    return await this.prismaService.post.create({
      data: {
        title: data.title,
        contents: data.contents,
        img: data.img,
        categoryId: data.catgoryId,
      },
    });
  }
}
