import { ForbiddenException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2' // argon is used to encrypt the data(here for password)

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) { }

  async login(dto: LoginDto) {

    const user = await this.prisma.user.findUnique({ where: { email: dto.email } })

    if (!user) {
      throw new ForbiddenException("Credentials incorrect")
    }

    const passwordMatch = await argon.verify(user.password, dto.password) //compare password
    if (!passwordMatch) {
      throw new ForbiddenException("Credentials incorrect")
    }

    console.log(user)
    return user
  }
}
