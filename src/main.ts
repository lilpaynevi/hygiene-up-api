import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Hygiene Up')
    .setDescription('API ')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.useStaticAssets(join(__dirname, '..', 'uploads'));

  app.enableCors();
  await app.listen(3000);
  console.log('Starting ...');
  // console.log(process.env.JWT_SECRET)
}
bootstrap();
