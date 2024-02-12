import { Module } from '@nestjs/common';
import { BrokersModule } from './brokers/brokers.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { NotFoundInterceptor } from './interceptors/notfound.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [BrokersModule, UsersModule, PrismaModule],
})
export class AppModule { }
