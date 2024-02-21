
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDto } from './dto';
import * as argon from 'argon2' // argon is used to encrypt the data(here for password)

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  private select = {
    email: true,
    name: true,
    id: true,
  }

  async createUser(createDto: CreateDto) {
    const hash = await argon.hash(createDto.password)
    const data = {
      email: createDto.email,
      password: hash,
      name: createDto.name
    }
    return this.prisma.user.create({ data, select: this.select })
  }

  async findUserByUsername(email: string) {
    return this.prisma.user.findUnique({ where: { email: email } });
  }

}
