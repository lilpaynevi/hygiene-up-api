import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Hygiene Up')
    .setDescription('API ')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);



  app.enableCors();
  await app.listen(3000);
  console.log('Starting ...')
  // console.log(process.env.JWT_SECRET)
}
bootstrap();
