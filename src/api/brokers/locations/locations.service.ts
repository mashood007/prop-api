import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocationsService {
  constructor(private prisma: PrismaService) { }

  create(createLocationDto: CreateLocationDto) {
    return this.prisma.location.create({ data: createLocationDto })
  }

  findAll() {
    return this.prisma.location.findMany({
      select: {
        name: true,
        lat: true,
        id: true,
        long: true,
        city: {
          select: {
            name: true,
            id: true
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
