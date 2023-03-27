import { Controller, Inject, Logger, LoggerService, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { Body, Delete, Get, Param, Post, Query } from "@nestjs/common/decorators";
import { sendResponse, sendError } from "src/utils/response.utils";
import { IncomeService } from "src/services/income.service";
import { addIncomeDto, findAllIncomesDto } from "src/dto/income.dto";
// import { AllExceptionsFilter } from "src/utils/exceptionFilter.utils";

@Controller("income")
export class IncomeController {
    constructor(private incomeService: IncomeService, @Inject(Logger) private readonly logger: LoggerService) { }
    @Post("addIncome")
    async addIncome(@Body() addIncomeDto: addIncomeDto, @Res() res: Response, @Req() req: Request) {

        try {
            this.logger.log("IN - addIncome controller!")
            const response = await this.incomeService.addIncome(addIncomeDto)
            this.logger.log("OUT - addIncome controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - addIncome controller - ${error.message}`)
            return sendError(res, req, {}, "", 500);
            // throw new Error(`ERROR - addIncome addIncome controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    @Get("getAllIncomes")
    async findAllIncomes(@Query() findAllIncomesDto: findAllIncomesDto, @Res() res: Response, @Req() req: Request) {
        try {
            this.logger.log("IN - findAllIncomes controller!")
            const response = await this.incomeService.findAllIncomes(findAllIncomesDto)
            this.logger.log("OUT - findAllIncomes controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - findAllIncomes controller - ${error.message}`)
            return sendError(res, req, {}, error, 500);
            // throw new Error(`ERROR - findAllIncomes findAllIncomes controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}