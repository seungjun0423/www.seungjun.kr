/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body, Res, Req, UseGuards } from '@nestjs/common';
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
  ): Promise<any> {
    const jwt = await this.authService.login(data);
    // 헤더에 쿠키를 넣어준다.
    res.setHeader('Authorization', 'Bearer: ' + jwt.accessToken);

    // 브라우저에서 자바스크립트를 통한 토큰 탈취를 막기위한 옵션.
    res.cookie('jwt', jwt.accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    // return res.json(jwt);
    return res.send({
      message: 'login success',
    });
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
    return;
  }
}
