import { Inject, Injectable, Logger, LoggerService } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger";
import mongoose, { Model } from "mongoose";
import { Expense } from "src/schemas/expense.schema";
// import { AllExceptionsFilter } from "src/utils/exceptionFilter.utils";

@Injectable()
export class ExpenseDatabase {
    constructor(@InjectModel('Expense') private expenseModel: Model<Expense>, @Inject(Logger) private readonly logger: LoggerService) { }
    async addExpense(amount: String, userId: String, categoryId: String, sourceId: String) {
        try {
            this.logger.log("IN - addExpense database query!")

            const response = await this.expenseModel.create({
                amount,
                user: userId,
                category: categoryId,
                source: sourceId
            })

            this.logger.log("OUT - addExpense database query!")

            return response;
        } catch (error) {
            this.logger.error(`ERROR - addExpense database query - ${error.message}`)
            throw new Error(`ERROR - addExpense database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findAllExpenses(userId: String) {
        try {
            this.logger.log("IN - findAllExpenses database query!")

            const response = await this.expenseModel.find({ user: userId })
            this.logger.log("OUT - findAllExpenses database query!")


            return response;
        } catch (error) {
            this.logger.error(`ERROR - findAllExpenses database query - ${error.message}`)
            throw new Error(`ERROR - findAllExpenses database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    @ApiProperty()
    async findSummaryByMonth(year: number, month: number, userId: String) {
        const start = new Date(year, month - 1, 1, 0, 0, 0);
        const end = new Date(year, month, 1, 0, 0, 0);
        try {
            this.logger.log("IN - findSummaryByMonth database query!")
            const response = await this.expenseModel.aggregate([
                { $match: { user: userId, createdAt: { $gte: start, $lt: end } } },
                { $group: { _id: null, income: { $sum: { $cond: [{ $gte: ['$amount', 0] }, '$amount', 0] } }, expense: { $sum: { $cond: [{ $lt: ['$amount', 0] }, '$amount', 0] } } } },
            ]);
            this.logger.log("OUT - findSummaryByMonth database query!")
            return { income: response.length > 0 ? response[0].income : 0, expense: response.length > 0 ? response[0].expense : 0 };
        } catch (error) {
            this.logger.error(`ERROR - findSummaryByMonth database query - ${error.message}`)
            throw new Error(`ERROR - findSummaryByMonth database query - ${error.message}`)
        }
    }
    @ApiProperty()
    async findSummaryByYear(year: number, userId: String) {
        const start = new Date(year, 0, 1, 0, 0, 0);
        const end = new Date(year + 1, 0, 1, 0, 0, 0);
        const id = userId;
        try {
            this.logger.log("IN - findSummaryByYear database query!")
            const response = await this.expenseModel.aggregate([
                { $match: { user: id, createdAt: { $gte: start, $lt: end } } },
                { $group: { _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } }, income: { $sum: { $cond: [{ $gte: ['$amount', 0] }, '$amount', 0] } }, expense: { $sum: { $cond: [{ $lt: ['$amount', 0] }, '$amount', 0] } } } },
                { $sort: { '_id.year': -1, '_id.month': -1 } }
            ]);
            this.logger.log("OUT - findSummaryByYear database query!")
            return response.map(item => ({ year: item._id.year, month: item._id.month, income: item.income, expense: item.expense }));
        } catch (error) {
            this.logger.error(`ERROR - findSummaryByYear database query - ${error.message}`)
            throw new Error(`ERROR - findSummaryByYear database query - ${error.message}`)
        }
    }
    @ApiProperty()
    async findSummaryByToday(userId: String) {
        const start = new Date();
        start.setHours(0, 0, 0, 0);
        const end = new Date();
        end.setHours(23, 59, 59, 999);
        try {
            this.logger.log("IN - findSummaryByToday database query!")

            const result = await this.expenseModel.aggregate([
                { $match: { user: userId, createdAt: { $gte: start, $lt: end } } },
                { $group: { _id: null, income: { $sum: { $cond: [{ $gte: ['$amount', 0] }, '$amount', 0] } }, expense: { $sum: { $cond: [{ $lt: ['$amount', 0] }, '$amount', 0] } } } },
            ]);
            this.logger.log("OUT - findSummaryByToday database query!")
            return { income: result.length > 0 ? result[0].income : 0, expense: result.length > 0 ? result[0].expense : 0 };
        } catch (error) {
            this.logger.error(`ERROR - findSummaryByToday database query - ${error.message}`)
            throw new Error(`ERROR - findSummaryByToday database query - ${error.message}`)
        }
    }

}
