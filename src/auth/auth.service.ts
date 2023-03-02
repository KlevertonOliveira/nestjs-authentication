import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, passwd: string) {
    const user = await this.usersService.findOne(username);

    if (!user || user.password !== passwd) return null;

    const { password, ...result } = user;
    return result;
  }
}
