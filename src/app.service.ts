import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { ClientProxy } from "@nestjs/microservices"

@Injectable()
export class AppService {
  constructor(@Inject("MSGS_SERVICE") private readonly client: ClientProxy){}

  sendMsg(data: any): any{
    const res = this.client.send('notifications', data);
    
    return res
  }

  addUser(newUser: {name: string, age: number, tel: string}): any{
    const res = this.client.send('add_user', newUser);

    return res
  }

  getAllUsers(): Array<{name: string, age: number, tel: string}> | any{
    return this.client.send('view_users', {});
  }

  getHello(): string {
    return 'Hello World!';
  }
}
