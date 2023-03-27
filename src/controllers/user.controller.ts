import { Controller, Delete, Get, Inject, Logger, LoggerService, Param, Post, Query, Req, Res } from "@nestjs/common";
import { Body } from "@nestjs/common/decorators";
import { Request, Response } from "express";
import { findAllUsersDto } from "src/dto/user.dto";
import { UserService } from "src/services/user.service";
import { sendError, sendResponse } from "src/utils/response.utils";

@Controller("user")
export class UserController {
    constructor(private userService: UserService, @Inject(Logger) private readonly logger: LoggerService) { }

    @Get("getAllUsers")
    async findAllUsers(@Query() findAllUsersDto: findAllUsersDto, @Res() res: Response, @Req() req: Request) {
        try {
            this.logger.log("IN - findAllUsers controller!")
            // console.log(req)
            const response = await this.userService.findAllUsers(findAllUsersDto)
            this.logger.log("OUT - findAllUsers controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - findAllUsers controller - ${error.message}`)
            return sendError(res, req, {}, error, 500);
            // throw new Error(`ERROR - findAllUsers findAllUsers controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}