import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { JwtStratery } from './strategy';

@Module({
  providers: [AuthService, JwtService, JwtStratery],
  controllers: [AuthController]
})
export class AuthModule { }
