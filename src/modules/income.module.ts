import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { IncomeController } from 'src/controllers/income.controller';
import { IncomeDatabase } from 'src/database/income.database';
import { IncomeSchema } from 'src/schemas/income.schema';
import { IncomeService } from 'src/services/income.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Income", schema: IncomeSchema }])],
    controllers: [IncomeController],
    providers: [IncomeService, IncomeDatabase, Logger]
})
export class IncomeModule { }
