import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const porta = 3008


  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('MCF CRM')
    .setDescription(
      'Gerenciador de pedidos',
    )
    .setVersion('1.0')
    .addTag('MCF-CRM')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || porta, () => {
    console.log(`Rodando neste endereço: http://localhost:${porta}/api`);
  });
}

bootstrap().catch((e) => console.log(`Deu ruim: ${e}`));
