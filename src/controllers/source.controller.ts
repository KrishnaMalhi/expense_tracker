import { Controller, Inject, Logger, LoggerService, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { Body, Delete, Get, Param, Post, Query } from "@nestjs/common/decorators";
import { sendResponse, sendError } from "src/utils/response.utils";
import { SourceService } from "src/services/source.service";
import { addSourceDto, deleteOneSourceDto, findAllSourcesDto, findOneSourceDto } from "src/dto/source.dto";
// import { AllExceptionsFilter } from "src/utils/exceptionFilter.utils";

@Controller("source")
export class SourceController {
    constructor(private sourceService: SourceService, @Inject(Logger) private readonly logger: LoggerService) { }
    @Post("addSource")
    async addSource(@Body() addSourceDto: addSourceDto, @Res() res: Response, @Req() req: Request) {

        try {
            this.logger.log("IN - addSource controller!")
            const response = await this.sourceService.addSource(addSourceDto)
            this.logger.log("OUT - addSource controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - addSource controller - ${error.message}`)
            return sendError(res, req, {}, "", 500);
            // throw new Error(`ERROR - addSource addSource controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    @Get("getAllSources")
    async findAllSources(@Query() findAllSourcesDto: findAllSourcesDto, @Res() res: Response, @Req() req: Request) {
        try {
            this.logger.log("IN - findAllSources controller!")
            const response = await this.sourceService.findAllSources(findAllSourcesDto)
            this.logger.log("OUT - findAllSources controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - findAllSources controller - ${error.message}`)
            return sendError(res, req, {}, error, 500);
            // throw new Error(`ERROR - findAllSources findAllSources controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    @Get("getSource")
    async findOneSource(@Query() findOneSourceDto: findOneSourceDto, @Res() res: Response, @Req() req: Request) {

        try {
            this.logger.log("IN - findOneSource controller!")
            const response = await this.sourceService.findOneSource(findOneSourceDto)
            this.logger.log("OUT - findOneSource controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - findOneSource controller - ${error.message}`)
            return sendError(res, req, {}, "", 500);
            // throw new Error(`ERROR - findOneSource findOneSource controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    @Delete("deleteSource")
    async deleteOneSource(@Query() deleteOneSourceDto: deleteOneSourceDto, @Res() res: Response, @Req() req: Request) {
        try {
            this.logger.log("IN - deleteOneSource controller!")
            const response = await this.sourceService.deleteOneSource(deleteOneSourceDto)
            this.logger.log("OUT - deleteOneSource controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - deleteOneSource controller - ${error.message}`)
            return sendError(res, req, {}, "", 500);
            // throw new Error(`ERROR - deleteOneSource deleteOneSource controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}