import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(data: { email: string; password: string }) {
    const { email, password } = data;

    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new UnauthorizedException('El correo ya está registrado.');
    }

    const newUser = await this.usersService.create(email, password);

    const token = this.jwtService.sign({ sub: newUser.id, email: newUser.email });

    return {
      message: 'Usuario registrado correctamente.',
      user: {
        id: newUser.id,
        email: newUser.email,
      },
      token,
    };
  }

  async login(data: { email: string; password: string }) {
    const { email, password } = data;

    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas.');
    }

    const token = this.jwtService.sign({ sub: user.id, email: user.email });

    return {
      message: 'Login exitoso.',
      user: {
        id: user.id,
        email: user.email,
      },
      token,
    };
  }
}
