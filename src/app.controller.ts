/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get } from '@nestjs/common';
import { UserService } from './services/user/UserServices';
import { UserDomain } from './domain/user/user';
@Controller('user')
export class AppController {
  constructor(private readonly appService: UserService) {}

  @Get()
  async getHello(): Promise<UserDomain[]> {
    return await this.appService.findAll();
  }
}
