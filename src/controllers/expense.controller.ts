import { Controller, Inject, Logger, LoggerService, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { Body, Delete, Get, Param, Post, Query } from "@nestjs/common/decorators";
import { sendResponse, sendError } from "src/utils/response.utils";
import { ExpenseService } from "src/services/expense.service";
import { addExpenseDto, findAllExpensesDto, findSummaryByMonthDto, findSummaryByTodayDto, findSummaryByYearDto } from "src/dto/expense.dto";
// import { AllExceptionsFilter } from "src/utils/exceptionFilter.utils";

@Controller("expense")
export class ExpenseController {
    constructor(private incomeService: ExpenseService, @Inject(Logger) private readonly logger: LoggerService) { }
    @Post("addExpense")
    async addExpense(@Body() addExpenseDto: addExpenseDto, @Res() res: Response, @Req() req: Request) {

        try {
            this.logger.log("IN - addExpense controller!")
            const response = await this.incomeService.addExpense(addExpenseDto)
            this.logger.log("OUT - addExpense controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - addExpense controller - ${error.message}`)
            return sendError(res, req, {}, "", 500);
            // throw new Error(`ERROR - addExpense addExpense controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    @Get("getAllExpenses")
    async findAllExpenses(@Query() findAllExpensesDto: findAllExpensesDto, @Res() res: Response, @Req() req: Request) {
        try {
            this.logger.log("IN - findAllExpenses controller!")
            const response = await this.incomeService.findAllExpenses(findAllExpensesDto)
            this.logger.log("OUT - findAllExpenses controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - findAllExpenses controller - ${error.message}`)
            return sendError(res, req, {}, error, 500);
            // throw new Error(`ERROR - findAllExpenses findAllExpenses controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    @Get("getSummryByMonth")
    async findSummaryByMonth(@Query() findSummaryByMonthDto: findSummaryByMonthDto, @Res() res: Response, @Req() req: Request) {
        try {
            this.logger.log("IN - findSummaryByMonth controller!")
            const response = await this.incomeService.findSummaryByMonth(findSummaryByMonthDto)
            this.logger.log("OUT - findSummaryByMonth controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - findSummaryByMonth controller - ${error.message}`)
            return sendError(res, req, {}, error, 500);
            // throw new Error(`ERROR - findSummaryByMonth findSummaryByMonth controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    @Get("getSummaryByYear")
    async findSummaryByYear(@Query() findSummaryByYearDto: findSummaryByYearDto, @Res() res: Response, @Req() req: Request) {
        try {
            this.logger.log("IN - findSummaryByYear controller!")
            const response = await this.incomeService.findSummaryByYear(findSummaryByYearDto)
            this.logger.log("OUT - findSummaryByYear controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - findSummaryByYear controller - ${error.message}`)
            return sendError(res, req, {}, error, 500);
            // throw new Error(`ERROR - findSummaryByYear findSummaryByYear controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    @Get("findSummaryByToday")
    async findSummaryByToday(@Query() findSummaryByTodayDto: findSummaryByTodayDto, @Res() res: Response, @Req() req: Request) {
        try {
            this.logger.log("IN - findSummaryByToday controller!")
            const response = await this.incomeService.findSummaryByToday(findSummaryByTodayDto)
            this.logger.log("OUT - findSummaryByToday controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - findSummaryByToday controller - ${error.message}`)
            return sendError(res, req, {}, error, 500);
            // throw new Error(`ERROR - findSummaryByToday findSummaryByToday controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}