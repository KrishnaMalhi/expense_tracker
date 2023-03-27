import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { ExpenseController } from 'src/controllers/expense.controller';
import { ExpenseDatabase } from 'src/database/expense.database';
import { ExpenseSchema } from 'src/schemas/expense.schema';
import { ExpenseService } from 'src/services/expense.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Expense", schema: ExpenseSchema }])],
    controllers: [ExpenseController],
    providers: [ExpenseService, ExpenseDatabase, Logger]
})
export class ExpenseModule { }
