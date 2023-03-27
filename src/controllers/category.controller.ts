import { Controller, Inject, Logger, LoggerService, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { Body, Delete, Get, Param, Post, Query } from "@nestjs/common/decorators";
import { CategoryService } from "src/services/category.service";
import { sendResponse, sendError } from "src/utils/response.utils";
import { addCategoryDto, deleteOneCategoryDto, findAllCategoriesDto, findOneCategoryDto } from "src/dto/category.dto";
// import { AllExceptionsFilter } from "src/utils/exceptionFilter.utils";

@Controller("category")
export class CategoryController {
    constructor(private categoryService: CategoryService, @Inject(Logger) private readonly logger: LoggerService) { }
    @Post("addCategory")
    async addCategory(@Body() addCategoryDto: addCategoryDto, @Res() res: Response, @Req() req: Request) {

        try {
            this.logger.log("IN - addCategory controller!")
            const response = await this.categoryService.addCategory(addCategoryDto)
            this.logger.log("OUT - addCategory controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - addCategory controller - ${error.message}`)
            return sendError(res, req, {}, "", 500);
            // throw new Error(`ERROR - addCategory addCategory controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    @Get("getAllCategories")
    async findAllCategories(@Query() findAllCategoriesDto: findAllCategoriesDto, @Res() res: Response, @Req() req: Request) {
        try {
            this.logger.log("IN - findAllCategories controller!")
            const response = await this.categoryService.findAllCategories(findAllCategoriesDto)
            this.logger.log("OUT - findAllCategories controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - findAllCategories controller - ${error.message}`)
            return sendError(res, req, {}, error, 500);
            // throw new Error(`ERROR - findAllCategories findAllCategories controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    @Get("getCategory")
    async findOneCategory(@Query() findOneCategoryDto: findOneCategoryDto, @Res() res: Response, @Req() req: Request) {

        try {
            this.logger.log("IN - findOneCategory controller!")
            const response = await this.categoryService.findOneCategory(findOneCategoryDto)
            this.logger.log("OUT - findOneCategory controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - findOneCategory controller - ${error.message}`)
            return sendError(res, req, {}, "", 500);
            // throw new Error(`ERROR - findOneCategory findOneCategory controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    @Delete("deleteCategory")
    async deleteOneCategory(@Query() deleteOneCategoryDto: deleteOneCategoryDto, @Res() res: Response, @Req() req: Request) {
        try {
            this.logger.log("IN - deleteOneCategory controller!")
            const response = await this.categoryService.deleteOneCategory(deleteOneCategoryDto)
            this.logger.log("OUT - deleteOneCategory controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - deleteOneCategory controller - ${error.message}`)
            return sendError(res, req, {}, "", 500);
            // throw new Error(`ERROR - deleteOneCategory deleteOneCategory controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}