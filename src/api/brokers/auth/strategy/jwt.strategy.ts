import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { PassportStrategy } from "@nestjs/passport"
import { Strategy, ExtractJwt } from "passport-jwt"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable({})
export class JwtStratery extends PassportStrategy(Strategy, 'jwt-auth') {

  constructor(
    config: ConfigService,
    private prisma: PrismaService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET_KEY')
    })
  }

  // returns the payload
  async validate(payload: {
    sub: number,
    email: string,
    iat: any,
    ex: number
  }) {

    const user = await this.prisma.user.findUnique({ where: { email: payload.email } })
    // const user = await this.userRepository.findOne({ where: { email: payload.email }, select: ['email', 'name', 'id'] });
    return user
  }

}
