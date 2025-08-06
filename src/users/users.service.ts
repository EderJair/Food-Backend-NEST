import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async create(email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
      id: this.users.length + 1,
      email,
      password: hashedPassword,
    };
    this.users.push(newUser);
    return newUser;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}
