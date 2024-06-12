/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post,Body,UseGuards } from '@nestjs/common';
import { UserService } from '../services/user/UserServices';
import { UserDomain } from '../domain/user/user';
import { UserDTO } from '../domain/user/user_dto';
import { UserSpecialization } from '../domain/user/user_specialization';
import { AuthGuard } from '../services/auth/AuthGuard';
import { ApiBody } from '@nestjs/swagger';
@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Post()
  // @UseGuards(AuthGuard)
  @ApiBody({type:UserSpecialization})
  async getHello(@Body() paging:UserSpecialization): Promise<UserDTO[]> {
    return await this.appService.findAll(paging);
  }
}
