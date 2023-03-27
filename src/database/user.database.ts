import { Inject, Injectable, Logger, LoggerService } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";

@Injectable()
export class UserDatabase {
    constructor(@InjectModel('User') private userModel: Model<User>, @Inject(Logger) private readonly logger: LoggerService) { }

    async findAllUsers(id: String, role: String) {
        try {
            this.logger.log("IN - findAllUsers database query!")

            const isSuperUser = await this.userModel.findOne({ _id: id, role })

            if (!isSuperUser) {
                throw new Error(`ERROR - findAllUsers database query - ${isSuperUser}`)
            }

            const response = await this.userModel.find()
            this.logger.log("OUT - findAllUsers database query!")

            return response;
        } catch (error) {
            this.logger.error(`ERROR - findAllUsers database query - ${error.message}`)
            throw new Error(`ERROR - findAllUsers database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}