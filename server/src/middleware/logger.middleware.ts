import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('리퀘스트', req);
    // console.log('리퀘스트 쿠키', req.cookies);
    // console.log('리퀘스트 헤더', req.headers);
		// console.log('리스폰스', res);
    next();
  }
}
