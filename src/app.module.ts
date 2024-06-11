/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './controllers/user_controller';
import { AuthController } from './controllers/auth_controller';
import { AppService } from './app.service';
import { RepositoryModule } from './infrastructure/repositories/repository.module';
// import { MapperModule } from './infrastructure/mapper/mapper.module';
import { DatabaseModule } from './infrastructure/database_module/database.module';
import { ServiceModule } from './services/service.module';
@Module({
  imports: [RepositoryModule,DatabaseModule,ServiceModule],
  controllers: [UserController,AuthController],
  providers: [AppService,RepositoryModule,ServiceModule],
})
export class AppModule {}
