import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './security/passport.jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    JwtModule.register({
      secret: 'needmoremoney',
      signOptions: { expiresIn: '300s' },
    }),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy],
})
export class AuthModule {}
