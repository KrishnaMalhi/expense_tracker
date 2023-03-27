import { Inject, Injectable, Logger, LoggerService } from "@nestjs/common";
import { UserDatabase } from "src/database/user.database";
import { findAllUsersDto } from "src/dto/user.dto";

@Injectable()
export class UserService {
    constructor(private userDatabase: UserDatabase, @Inject(Logger) private readonly logger: LoggerService) { }

    async findAllUsers(findAllUsersDto: findAllUsersDto) {
        const { _id, role } = findAllUsersDto
        try {
            this.logger.log("IN - findAllUsers service!")

            this.logger.log("_id: ", _id)
            const response = await this.userDatabase.findAllUsers(_id, role)
            this.logger.log("response: ", response)


            this.logger.log("OUT - findAllUsers service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR - findAllUsers service - ${error.message}`)
            throw new Error(`ERROR - findAllUsers service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}