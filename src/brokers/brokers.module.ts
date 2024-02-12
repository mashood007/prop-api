import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { PropertiesModule } from './properties/properties.module';
import { LocationsModule } from './locations/locations.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  imports: [CategoriesModule, PropertiesModule, LocationsModule, UsersModule, AuthModule]
})
export class BrokersModule { }
