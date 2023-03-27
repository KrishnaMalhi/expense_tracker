import { Inject, Injectable, Logger, LoggerService } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";
import { Income } from "src/schemas/income.schema";
// import { AllExceptionsFilter } from "src/utils/exceptionFilter.utils";

@Injectable()
export class IncomeDatabase {
    constructor(@InjectModel('Income') private IncomeModel: Model<Income>, @Inject(Logger) private readonly logger: LoggerService) { }
    async addIncome(amount: String, userId: String, categoryId: String, sourceId: String) {
        try {
            this.logger.log("IN - addIncome database query!")

            const response = await this.IncomeModel.create({
                amount,
                user: userId,
                category: categoryId,
                source: sourceId
            })

            this.logger.log("OUT - addIncome database query!")

            return response;
        } catch (error) {
            this.logger.error(`ERROR - addIncome database query - ${error.message}`)
            throw new Error(`ERROR - addIncome database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findAllIncomes(userId: String) {
        try {
            this.logger.log("IN - findAllIncomes database query!")

            const response = await this.IncomeModel.find({ user: userId })

            this.logger.log("OUT - findAllIncomes database query!")

            return response;
        } catch (error) {
            this.logger.error(`ERROR - findAllIncomes database query - ${error.message}`)
            throw new Error(`ERROR - findAllIncomes database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}
