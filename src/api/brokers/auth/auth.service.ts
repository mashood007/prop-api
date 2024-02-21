import { ForbiddenException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2' // argon is used to encrypt the data(here for password)
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwt: JwtService
  ) { }

  async login(dto: LoginDto) {

    const user = await this.prisma.user.findUnique({ where: { email: dto.email } })

    if (!user) {
      throw new ForbiddenException("Credentials incorrect")
    }

    const passwordMatch = await argon.verify(user.password, dto.password) //compare password
    if (!passwordMatch) {
      throw new ForbiddenException("Credentials incorrect")
    }

    return this.signToken(user.id, user.email)
  }

  async signToken(userId: number, email: string): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email: email
    }
    const access_token = await this.jwt.signAsync(payload, {
      expiresIn: '30m', // 3o minutes
      secret: this.config.get('JWT_SECRET_KEY')
    })
    return { access_token: access_token }
  }
}
