import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'dtos/CreateUser.dto';
import { User } from 'models/User';
 
@Injectable()
export default class UsersService {
  private lastUserId = 0;
  private users: User[] = [];
 
  getAllUsers() {
    return this.users;
  }
 
  createUser(user: CreateUserDto) {
    console.log(user, this.users)

    const newUser = {
      id: ++this.lastUserId,
      ...user
    }
    this.users.push(newUser);
    return newUser;
  }
}
