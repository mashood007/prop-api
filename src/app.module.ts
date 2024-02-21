import { Module } from '@nestjs/common';
import { BrokersModule } from './api/brokers/brokers.module';
import { UsersModule } from './api/users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BrokersModule, UsersModule, PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule { }
