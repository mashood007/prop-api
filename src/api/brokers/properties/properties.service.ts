import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) { }

  create(createPropertyDto: CreatePropertyDto) {
    return this.prisma.property.create({ data: createPropertyDto })
    // const propertyCreateInput: any = {
    //   name: createPropertyDto.name,
    //   description: createPropertyDto.description,
    //   furnish: createPropertyDto.furnish,
    //   aminities: { set: createPropertyDto.aminities }, // Ensure proper format for aminities based on Prisma schema
    //   buildingInfo: createPropertyDto.buildingInfo,
    //   categoryId: createPropertyDto.categoryId, // Ensure categoryId type is number as expected by Prisma
    //   locationId: createPropertyDto.locationId,
    // };

    // return this.prisma.property.create({
    //   data: propertyCreateInput,
    // });
  }

  findAll() {
    return this.prisma.property.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
