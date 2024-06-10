/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserRepository } from './infrastructure/repositories/User/UseRepository';
import { RepositoryModule } from './infrastructure/repositories/repository.module';
import { UserDomain } from './domain/user/user';
@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService,private readonly userRepo:UserRepository) {}

  @Get()
  async getHello(): Promise<UserDomain[]> {
    return await this.userRepo.findAll();
  }
}
