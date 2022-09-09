import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'dtos/CreateUser.dto';
import { User } from 'models/User';
import users from './users';

@Injectable()
export default class UsersService {
  private lastUserId = 0;
  private users: User[] = users;

  getAllUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    const userExists = this.users.some((u) => {
      return u.name == user.name;
    });
    if (userExists) {
      throw new HttpException(
        `Name ${user.name} already taken`,
        HttpStatus.FORBIDDEN,
      );
    }

    const newUser = {
      id: ++this.lastUserId,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
}
