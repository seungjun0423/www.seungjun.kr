import { PrismaService } from 'src/prisma/prisma.service';
import { HttpStatus, HttpException, Injectable } from '@nestjs/common';
import { User } from '@prisma';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  /** 전체 사용자 조회 */
  async findAllUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  /** id로 단일 사용자 조회 */
  async findUser(id: number): Promise<User | null> {
    const result = await this.prismaService.user.findUnique({
      where: { id: Number(id) },
    });
    return result;
  }

  /** email 중복검사 */
  async findUserByEmail(email: string): Promise<boolean> {
    const result = await this.prismaService.user.findUnique({
      where: { email: String(email) },
    });
    if (result) {
      // 이미 가입된 이메일입니다.
      return true;
    } else {
      // 가입 가능한 이메일입니다.
      return false;
    }
  }

  /** 회원정보 수정 */
  // async updateUser(id: number,name: string,age: number,phone: number,email: string): Promise<User | null> {
  async updateUser(id: number, email: string): Promise<any> {
    // 회원정보 유무 판단
    const existed = await this.findUser(id);

    // 회원정보가 있는 경우에만 업데이트 진행
    if (existed) {
      // 업데이트
      const update = await this.prismaService.user.update({
        where: { id: Number(id) },
        data: { email: email },
      });

      return update;
    }
  }

  /** 단일 사용자 데이터 삭제 */
  async deleteUser(id: number): Promise<any> {
    // 회원정보 유무 판단
    const existed = await this.findUser(id);

    // 회원정보가 있는 경우에만 삭제 진행
    if (existed) {
      // 삭제
      const result = await this.prismaService.user.delete({
        where: { id: Number(id) },
      });

      // 삭제 확인
      if (result) {
        throw new HttpException(
          'user data delete completed',
          HttpStatus.ACCEPTED,
        );
      } else {
        throw new HttpException(
          'user data cannot delete',
          HttpStatus.BAD_REQUEST,
        );
      }
    } else {
      throw new HttpException('user data cannot found', HttpStatus.BAD_REQUEST);
    }
  }
}
