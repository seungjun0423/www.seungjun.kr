import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function main() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<string>('server.port');

  app.enableCors({
    origin: `${process.env.CORS_URL}`,
    credentials: true,
    methods: ['POST', 'PUT', 'PATCH', 'DELETE', 'GET'],
  });
  app.use(cookieParser());
  await app.listen(port);
}
main();
