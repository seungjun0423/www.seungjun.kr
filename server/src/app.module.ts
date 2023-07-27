import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      cache: true,
      isGlobal: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
