import { NotFoundException, UnauthorizedException } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import {  User } from '@prisma';
import { Response } from 'express';
import { Login } from 'src/types/tpye';
@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // bcrypt: 비밀번호 암호화
  async transformPassword(data: Login): Promise<void> {
    data.password = await bcrypt.hash(
      // 암호화하는 데이터
      data.password,
      // 해쉬 라운드 횟수
      10,
    );

    return Promise.resolve();
  }

  async signin(data: Login): Promise<User> {
		await this.transformPassword(data);

    return await this.prismaService.user.create({
      data: { email: data.email, password: data.password },
    });
  }

  async login(data: Login, res: Response): Promise<Response | NotFoundException> {
		try{
			// 이메일을 통해 등록된 유저 여부 확인
			const userFind: User = await this.prismaService.user.findUnique({where: { email: data.email }});

			// 유저 정보 있음
			if(userFind){
				// 암호화해서 저장된 비밀번호 비교
				const checkPassword: boolean = await bcrypt.compare(
					data.password,
					userFind.password,
				);
				// const checkPassword = data.password=== userFind.password;
				// 비밀번호 일치
				if(checkPassword) {
					const payload: Omit<Login,'password'> = { id: userFind.id, email: userFind.email };
					
					// 헤더에 쿠키를 넣어준다.
					const accessToken = this.jwtService.sign(payload)

					// res.setHeader('Authorization', 'Bearer ' + accessToken);

					// 브라우저에서 자바스크립트를 통한 토큰 탈취를 막기위한 옵션.
					res.cookie('jwt', accessToken, {
						httpOnly: true,
						sameSite: 'strict',
						secure: true,
						maxAge: 24 * 60 * 60 * 1000,
					});
					return res.send({
						message: 'login success',
					});
				// 비밀번호 불일치
				} else if(!checkPassword){
					throw new UnauthorizedException('wrong password')
				} 
			// 등록된 유저 정보 없음
			} else if(!userFind) {
				throw new NotFoundException('user not founded');
			}
		} catch (err){
			throw err;
		}
  }

	// async logout(data: Login)
  async tokenValidateUser(payload: Omit<Login,'password'>) {
    return await this.prismaService.admin.findUnique({
      where: { id: payload.id },
    });
  }
}
