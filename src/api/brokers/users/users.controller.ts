import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateDto } from './dto';

@Controller('brokers/users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.usersService.createUser(createDto)
  }
}
