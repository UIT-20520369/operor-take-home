/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post,Body } from '@nestjs/common';
import { UserService } from './services/user/UserServices';
import { UserDomain } from './domain/user/user';
import { UserDTO } from './domain/user/user_dto';
import { UserSpecialization } from './domain/user/user_specialization';
@Controller()
export class AppController {
  constructor(private readonly appService: UserService) {}

  @Get()
  async getHello(): Promise<string> {
    return 'hello world';
  }
}
