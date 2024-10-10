import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  protected users: Array<users> = []

  getHello(): string {
    return 'Hello World!';
  }

  AddUsers(newuser: users): users{
    try {
      this.users.push(newuser);
      return newuser;
    } catch (err) {
      return err;
    }
  }

  returnUsers(): Array<users>{
    return this.users;
  }
}
