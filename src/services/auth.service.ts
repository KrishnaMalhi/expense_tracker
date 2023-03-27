import { Inject, Injectable, Logger, LoggerService } from "@nestjs/common";
import { AuthDatabase } from "src/database/auth.database";
import { LoginDto, RegisterDto } from "src/dto/auth.dto";
import { bcryptEncryption } from "src/utils/common.utils";

@Injectable()
export class AuthService {
    constructor(private authDatabase: AuthDatabase, @Inject(Logger) private readonly logger: LoggerService) { }

    async registerUser(registerDto: RegisterDto) {
        const { email, name, password } = registerDto
        try {
            this.logger.log("IN - registerUser service!")

            const hashedPassword = await bcryptEncryption(password)

            const response = await this.authDatabase.registerUser(email, name, hashedPassword)

            this.logger.log("OUT - registerUser service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  registerUser service - ${error.message}`)
            throw new Error(`ERROR -  registerUser service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }

    async loginUser(loginDto: LoginDto) {
        const { email, password } = loginDto
        try {
            this.logger.log("IN - loginUser service!")

            const response = await this.authDatabase.loginUser(email, password)

            this.logger.log("OUT - loginUser service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  loginUser service - ${error.message}`)
            throw new Error(`ERROR -  loginUser service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}