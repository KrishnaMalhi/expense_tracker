import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from "@nestjs/config"
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth.module';
import { ExpenseModule } from './modules/expense.module';
import { IncomeModule } from './modules/income.module';
import { CategoryModule } from './modules/category.module';
import { SourceModule } from './modules/source.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './utils/exceptionFilter.utils';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    // ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    AuthModule,
    UserModule,
    ExpenseModule,
    IncomeModule,
    CategoryModule,
    SourceModule,
  ],
  // controllers: [AppController],
  providers: [Logger, {
    provide: APP_FILTER,
    useClass: AllExceptionsFilter,

  },],
})
export class AppModule { }
