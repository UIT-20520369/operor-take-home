/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import "reflect-metadata";
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  // app.enableCors();
  // const config = new DocumentBuilder()
  //   .setTitle('Operor API')
  //   .setDescription('API description')
  //   .setVersion('1.0')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);
  await app.listen(3001);
}
bootstrap();
