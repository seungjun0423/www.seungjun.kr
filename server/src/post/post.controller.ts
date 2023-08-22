import { PostService } from './post.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Post('/createPost')
  async createPost(@Body() data: any): Promise<any> {
    return await this.postService.createPost(data);
  }
}
