import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('msg')
  sendMessag(@Body() data: any){
    return this.appService.sendMsg(data.data);
  }

  @Post('users')
  addUser(@Body() user: {name: string, age: number, tel: string}){
    return this.appService.addUser(user);
  }

  @Get('users')
  ViewAllUsers(){
    return this.appService.getAllUsers();
  }
}
