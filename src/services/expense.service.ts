import { Body, Inject, Injectable, Logger, LoggerService } from "@nestjs/common";
import { ExpenseDatabase } from "src/database/expense.database";
import { addExpenseDto, findAllExpensesDto, findSummaryByMonthDto, findSummaryByTodayDto, findSummaryByYearDto } from "src/dto/expense.dto";
// import { AllExceptionsFilter } from "src/utils/exceptionFilter.utils";

@Injectable()
export class ExpenseService {
    constructor(private expenseDatabase: ExpenseDatabase, @Inject(Logger) private readonly logger: LoggerService) { }
    async addExpense(addExpenseDto: addExpenseDto) {
        const { amount, user, category, source } = addExpenseDto
        try {
            this.logger.log("IN - addExpense service!")

            const response = await this.expenseDatabase.addExpense(amount, user, category, source)

            this.logger.log("OUT - addExpense service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  addExpense service - ${error.message}`)
            throw new Error(`ERROR -  addExpense service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findAllExpenses(findAllExpensesDto: findAllExpensesDto) {
        const { user } = findAllExpensesDto
        try {
            this.logger.log("IN - findAllExpenses service!")

            const response = await this.expenseDatabase.findAllExpenses(user)

            this.logger.log("OUT - findAllExpenses service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  findAllExpenses service - ${error.message}`)
            throw new Error(`ERROR -  findAllExpenses service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findSummaryByMonth(findSummaryByMonthDto: findSummaryByMonthDto) {
        const { year, month, user } = findSummaryByMonthDto
        try {
            this.logger.log("IN - findSummaryByMonth service!")

            const response = await this.expenseDatabase.findSummaryByMonth(year, month, user)

            this.logger.log("OUT - findSummaryByMonth service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  findSummaryByMonth service - ${error.message}`)
            throw new Error(`ERROR -  findSummaryByMonth service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findSummaryByYear(findSummaryByYearDto: findSummaryByYearDto) {
        const { year, user } = findSummaryByYearDto
        try {
            this.logger.log("IN - findSummaryByYear service!")

            const response = await this.expenseDatabase.findSummaryByYear(year, user)

            this.logger.log("OUT - findSummaryByYear service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  findSummaryByYear service - ${error.message}`)
            throw new Error(`ERROR -  findSummaryByYear service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findSummaryByToday(findSummaryByTodayDto: findSummaryByTodayDto) {
        const { user } = findSummaryByTodayDto
        try {
            this.logger.log("IN - findSummaryByToday service!")

            const response = await this.expenseDatabase.findSummaryByToday(user)

            this.logger.log("OUT - findSummaryByToday service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  findSummaryByToday service - ${error.message}`)
            throw new Error(`ERROR -  findSummaryByToday service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }

}