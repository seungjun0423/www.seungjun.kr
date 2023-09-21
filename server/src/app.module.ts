// eslint-disable-next-line prettier/prettier
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import config from './config/config';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UploadsModule } from './uploads/uploads.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      cache: true,
      isGlobal: true,
    }),
    PostModule,
    CategoryModule,
    AuthModule,
    UploadsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '/auth/login', method: RequestMethod.ALL });
		consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '/auth/logout', method: RequestMethod.ALL });
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '/post/write', method: RequestMethod.ALL });
		consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '/post/id:id/edit', method: RequestMethod.ALL });
		consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '/post/delete', method: RequestMethod.ALL });
  }
}
