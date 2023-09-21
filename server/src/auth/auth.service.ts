import { NotFoundException, UnauthorizedException } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash, compare } from 'bcryptjs';
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
		data.password = await hash(data.password,10);
  }

  async signin(data: Login): Promise<User> {
		await this.transformPassword(data);

    return await this.prismaService.user.create({
      data: { email: data.email, password: data.password },
    });
  }

	generateToken(type: 'access' | 'refresh', payload){
		const now = Math.floor(Date.now() / 1000);
		const exp = type === 'access' ? now + (60 * 60 * 24) : now + (60 * 60 * 24 * 14);
	
		const newPayload = {
			...payload,
			iat: now,
			exp: exp,
		};
	
		return this.jwtService.sign(newPayload);	
	}

	setCookie( res, name, value){
		res.cookie(name,value,{
			httpOnly: true,
			// sameSite: 'strict',
			// secure: true,
			maxAge: name === 'accessToken' ? 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000 * 14 ,
		});
	}

	async login(data: Login, res: Response): Promise<Response | NotFoundException> {
    const userFind: User = await this.prismaService.user.findUnique({where: { email: data.email }});

    if (!userFind) {
        throw new NotFoundException('user not founded');
    }

    const checkPassword: boolean = await compare(data.password, userFind.password);
    
    if (!checkPassword) {
        throw new UnauthorizedException('wrong password')
    }

    const payload: Omit<Login,'password'> = { id: userFind.id, email: userFind.email };
    
    const accessToken = this.generateToken('access',payload);
    const refreshToken = this.generateToken('refresh',payload);

		await this.prismaService.user.update({
			where: { id: userFind.id },
			data: { token: refreshToken },
	});


		this.setCookie(res,'accessToken',accessToken);
		this.setCookie(res,'refreshToken',refreshToken);

		return res.send({
			message:'login success',
			id: userFind.id,
			accessToken :accessToken,
			refreshToken :refreshToken,
		});
	}

	async refreshToken(req, res) {
		const oldToken = req.body.refreshToken;
		let payload;
		
		try {
				payload = this.jwtService.verify(oldToken);
		} catch (e) {
				throw new UnauthorizedException('Invalid refresh token');
		}

		// 데이터 베이스에서 일치하는 데이터가 있는 사람을 찾는다.
		const userFind = await this.prismaService.user.findUnique({where: { id: payload.id , email: payload.email}});
	
		if (!userFind || userFind.token !== oldToken) {
				throw new UnauthorizedException('Invalid refresh token');
		}
	
		const newPayload = { id: userFind.id, email: userFind.email };
		const accessToken = this.generateToken('access', newPayload);
		const refreshToken = this.generateToken('refresh', newPayload);
	
		await this.prismaService.user.update({
				where: { id:userFind.id },
				data:{ token: refreshToken },
		});
	
		this.setCookie(res, 'accessToken', accessToken);
		this.setCookie(res, 'refreshToken', refreshToken);
	
		return res.send({
			message :'Token refreshed',
			accessToken : accessToken,
			refreshToken : refreshToken,
		});
	
	
	}
	
	async logout( data, res: Response){
		res.cookie('accessToken', '', {
			httpOnly: true,
			// sameSite: 'strict',
			// secure: true,
			maxAge: 0,
		});
	
		res.cookie('refreshToken', '', {
			httpOnly: true,
			// sameSite: 'strict',
			// secure: true,
			maxAge: 0,
		});
		try {
			const tokenDelete = await this.prismaService.user.update({
				where: { id: data.id },
				data: { token: null}
			})

			if(tokenDelete){
				return res.send({
					message: 'logout success',
				});
			}
		} catch(err) {
			throw new UnauthorizedException('logout failed');
		}
	}

	// async logout(data: Login)
  async tokenValidateUser(payload: Omit<Login,'password'>) {
    return await this.prismaService.admin.findUnique({
      where: { id: payload.id },
    });
  }
}
