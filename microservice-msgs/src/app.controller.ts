import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('notifications')
  getNotifications(@Payload() data: string, @Ctx() context: RmqContext) {
    console.log(context.getMessage());
    return `New Data ${data}`
  }

  @MessagePattern('add_user')
  saveUser(@Payload() user: users, @Ctx() context: RmqContext){
    console.log(context.getMessage());
    return this.appService.AddUsers(user);
  }

  @MessagePattern('view_users')
  getAllUsers(@Payload() user: users, @Ctx() context: RmqContext){
    console.log(context.getMessage());
    return this.appService.returnUsers()
  }
}
