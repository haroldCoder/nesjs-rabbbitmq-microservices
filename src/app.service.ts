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

  getHello(): string {
    return 'Hello World!';
  }
}
