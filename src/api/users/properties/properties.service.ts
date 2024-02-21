import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) { }

  findAll() {
    return this.prisma.property.findMany({
      include: {
        category: true,
        location: {
          select: {
            name: true,
            city: true,
            lat: true,
            long: true
          }
        }
      }
    });
  }

  findOne(id: number) {
    return this.prisma.property.findUniqueOrThrow({ where: { id: id } });
  }
}
