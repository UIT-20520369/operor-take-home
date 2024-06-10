/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoryModule } from './infrastructure/repositories/repository.module';
// import { MapperModule } from './infrastructure/mapper/mapper.module';
import { DatabaseModule } from './infrastructure/database_module/database.module';
@Module({
  imports: [RepositoryModule,DatabaseModule],
  controllers: [AppController],
  providers: [AppService,RepositoryModule],
})
export class AppModule {}
