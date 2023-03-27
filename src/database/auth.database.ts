import { Inject, Injectable, Logger, LoggerService, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";
import { bcryptEncryptionComparision } from "src/utils/common.utils";

@Injectable()
export class AuthDatabase {
    constructor(@InjectModel('User') private userModel: Model<User>, private jwtService: JwtService, @Inject(Logger) private readonly logger: LoggerService) { }

    async registerUser(email: String, name: String, password: String) {
        try {
            this.logger.log("IN - registerUser database query!")


            const response = await this.userModel.create({
                email,
                name,
                password
            })

            const token = await this.jwtService.signAsync({ id: response._id })
            this.logger.log("OUT - registerUser database query!")

            return { token };
        } catch (error) {
            this.logger.error(`ERROR - registerUser database query - ${error.message}`)
            throw new Error(`ERROR - registerUser database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async loginUser(email: String, password: String) {
        try {
            this.logger.log("IN - loginUser database query!")


            const response = await this.userModel.findOne({
                email,
            })
            if (!response) {
                throw new Error("Invalid email or password")
            }
            const isPasswordMatched = await bcryptEncryptionComparision(password, response.password)

            if (!isPasswordMatched) {
                throw new Error("Invalid email or password")
            }

            const token = await this.jwtService.signAsync({ id: response._id })
            this.logger.log("OUT - loginUser database query!")

            return { token };
        } catch (error) {
            this.logger.error(`ERROR - loginUser database query - ${error.message}`)
            throw new Error(`ERROR - loginUser database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}