import { Body, Inject, Injectable, Logger, LoggerService } from "@nestjs/common";
import { IncomeDatabase } from "src/database/income.database";
import { addIncomeDto, findAllIncomesDto } from "src/dto/income.dto";
// import { AllExceptionsFilter } from "src/utils/exceptionFilter.utils";

@Injectable()
export class IncomeService {
    constructor(private sourceDatabase: IncomeDatabase, @Inject(Logger) private readonly logger: LoggerService) { }
    async addIncome(addIncomeDto: addIncomeDto) {
        const { amount, user, category, source } = addIncomeDto
        try {
            this.logger.log("IN - addIncome service!")

            const response = await this.sourceDatabase.addIncome(amount, user, category, source)

            this.logger.log("OUT - addIncome service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  addIncome service - ${error.message}`)
            throw new Error(`ERROR -  addIncome service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findAllIncomes(findAllIncomesDto: findAllIncomesDto) {
        const { user } = findAllIncomesDto
        try {
            this.logger.log("IN - findAllIncomes service!")

            const response = await this.sourceDatabase.findAllIncomes(user)

            this.logger.log("OUT - findAllIncomes service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  findAllIncomes service - ${error.message}`)
            throw new Error(`ERROR -  findAllIncomes service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}