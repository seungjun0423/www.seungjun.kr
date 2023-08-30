/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body, Res, Req, UseGuards, NotFoundException } from '@nestjs/common';
// import { AuthGuard } from './security/auth.guard'
// import { AuthGuard } from '@nestjs/passport';
import { AuthGuard } from './security/auth.guard';
import { Response, Request } from 'express';
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
  logout(@Res() res: Response): any {
    // 쿠키 만료 요청
    res.cookie('jwt', '', {
      maxAge: 0,
    });
    return res.send({
      message: 'logout success',
    });
  }

  @Get('/authentication')
  @UseGuards(AuthGuard)
  isAuthenticated(@Req() req: Request): any {
    return req.user;
  }
}
