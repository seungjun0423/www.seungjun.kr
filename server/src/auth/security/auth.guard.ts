import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard as NestAuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard extends NestAuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('여기는 authgurad!!!!');
    return super.canActivate(context);
  }
}
