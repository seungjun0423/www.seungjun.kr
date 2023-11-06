/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body, Res, UseGuards, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from './security/auth.guard';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { User } from '@prisma';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  async signin(
    @Body() data: { email: string; password: string },
  ): Promise<User> {
    return await this.authService.signin(data);
  }

  @Post('/login')
  async login(
    @Body() data: { email: string; password: string },
    @Res() res: Response,
  ): Promise<Response | NotFoundException> {
    return await this.authService.login(data,res);
  }

  @Post('/logout')
	@UseGuards(AuthGuard)
	async logout(@Body() data: number, @Res() res: Response)
	: Promise<Response | UnauthorizedException> {
		return await this.authService.logout( data, res);
	}

	@Get('/validate')
	@UseGuards(AuthGuard)
	async validate(@Res() res: Response)
	: Promise<Response | UnauthorizedException> {
		return res.send({message: 'auth user'});
	}
}
