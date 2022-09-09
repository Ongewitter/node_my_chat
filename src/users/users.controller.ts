import { Body, Controller, Get, Post } from '@nestjs/common';
import UsersService from './users.service';
import { CreateUserDto } from 'dtos/CreateUser.dto';

@Controller('users')
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    console.log('Getting users');
    return this.usersService.getAllUsers();
  }

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
}
