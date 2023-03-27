import { Body, Controller, Inject, Logger, LoggerService, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { LoginDto, RegisterDto } from "src/dto/auth.dto";
import { sendError, sendResponse } from "src/utils/response.utils";
import { AuthService } from "../services/auth.service";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService, @Inject(Logger) private readonly logger: LoggerService) { }

    @Post("registerUser")
    async registerUser(@Body() registerDto: RegisterDto, @Res() res: Response, @Req() req: Request) {

        try {
            this.logger.log("IN - registerUser controller!")
            const response = await this.authService.registerUser(registerDto)
            this.logger.log("OUT - registerUser controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - registerUser controller - ${error.message}`)
            return sendError(res, req, {}, "", 500);
            // throw new Error(`ERROR - registerUser registerUser controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    @Post("loginUser")
    async loginUser(@Body() loginDto: LoginDto, @Res() res: Response, @Req() req: Request) {

        try {
            this.logger.log("IN - loginUser controller!")
            const response = await this.authService.loginUser(loginDto)
            this.logger.log("OUT - loginUser controller!")
            return sendResponse(res, req, response, "success", true, 200)
        } catch (error) {
            this.logger.error(`ERROR - loginUser controller - ${error.message}`)
            return sendError(res, req, {}, "", 500);
            // throw new Error(`ERROR - loginUser loginUser controller - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}