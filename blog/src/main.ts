import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';



async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Ezequiel Almeida","https://github.com/EzeAlmeida/blogpessoal_nest.git","ezequiellalmeida2003@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);
  process.env.tz = '-3.00';
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors()

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
