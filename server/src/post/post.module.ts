import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import PostController from './post.controller';
import { PostService } from './post.service';
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from 'src/auth/security/passport.jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { AuthController } from 'src/auth/auth.controller';

@Module({
	imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [PostController],
  providers: [PostService, PrismaService],
})
export class PostModule {}
