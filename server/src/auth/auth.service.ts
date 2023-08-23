/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginPayload } from './security/LoginPayload.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Admin, User } from '@prisma';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // bcrypt: 비밀번호 암호화
  async transformPassword(data: { email: string; password: string }): Promise<void> {
    data.password = await bcrypt.hash(
      // 암호화하는 데이터
      data.password,
      // 해쉬 라운드 횟수
      10,
    );

    return Promise.resolve();
  }

  async signin(data: { email: string; password: string }): Promise<User> {
		await this.transformPassword(data)

    return await this.prismaService.user.create({
      data: { email: data.email, password: data.password },
    });
  }

  async login(data: {email: string; password: string;}): Promise<{ accessToken: string } | undefined> {
    // 등록된 유저 여부 확인
    const userFind: Admin = await this.prismaService.user.findUnique({
      where: { email: data.email },
    });

    // 암호화해서 저장된 비밀번호 비교
    const checkPassword = await bcrypt.compare(
      data.password,
      userFind.password,
    );

    if (!userFind || !checkPassword) {
      throw new UnauthorizedException();
    }
		
    const payload: LoginPayload = { id: userFind.id, email: userFind.email };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async tokenValidateUser(payload: LoginPayload) {
    return await this.prismaService.admin.findUnique({
      where: { id: payload.id },
    });
  }
}
