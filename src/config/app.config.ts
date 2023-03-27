import { HttpAdapterHost } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from 'src/utils/exceptionFilter.utils';

export const AppCongiguration = (app) => {

    const httpAdapter = app.get(HttpAdapterHost);
    app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
    const options = new DocumentBuilder()
        .setTitle('Expense Tracker API')
        .setDescription('The Expense Tracker API documentation')
        .setVersion('1.0')
        .addTag('auth')
        .addTag('users')
        .addTag('categories')
        .addTag('expenses')
        .addTag('sources')
        .addTag('income')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api_doc', app, document);
}