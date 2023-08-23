import { Injectable } from '@nestjs/common';
import { LoginPayload } from './security/LoginPayload.interface';

@Injectable()
export class AuthService {
  tokenValidateUser(_payload: LoginPayload) {
    throw new Error('Method not implemented.');
  }
}
