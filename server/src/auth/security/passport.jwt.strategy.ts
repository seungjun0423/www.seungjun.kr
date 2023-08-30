import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { Login } from 'src/types/tpye';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(
    payload: Omit<Login, 'password'>,
    done: VerifiedCallback,
  ): Promise<any> {
    const user = await this.authService.tokenValidateUser(payload);
    if (!user) {
      return done(
        new UnauthorizedException({ message: 'user data cannot found' }),
        false,
      );
    }
    return done(null, user);
  }
}
