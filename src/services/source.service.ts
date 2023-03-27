import { Body, Inject, Injectable, Logger, LoggerService } from "@nestjs/common";
import { SourceDatabase } from "src/database/source.database";
import { addSourceDto, deleteOneSourceDto, findAllSourcesDto, findOneSourceDto } from "src/dto/source.dto";
// import { AllExceptionsFilter } from "src/utils/exceptionFilter.utils";

@Injectable()
export class SourceService {
    constructor(private sourceDatabase: SourceDatabase, @Inject(Logger) private readonly logger: LoggerService) { }
    async addSource(addSourceDto: addSourceDto) {
        const { name, user } = addSourceDto
        try {
            this.logger.log("IN - addSource service!")

            const response = await this.sourceDatabase.addSource(name, user)

            this.logger.log("OUT - addSource service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  addSource service - ${error.message}`)
            throw new Error(`ERROR -  addSource service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findAllSources(findAllSourcesDto: findAllSourcesDto) {
        const { user } = findAllSourcesDto
        try {
            this.logger.log("IN - findAllSources service!")
            this.logger.log("user: ", user)
            this.logger.log("findAllSourcesDto: ", findAllSourcesDto)

            const response = await this.sourceDatabase.findAllSources(user)

            this.logger.log("OUT - findAllSources service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  findAllSources service - ${error.message}`)
            throw new Error(`ERROR -  findAllSources service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findOneSource(findOneSourceDto: findOneSourceDto) {
        const { _id, user } = findOneSourceDto
        try {
            this.logger.log("IN - findOneSource service!")

            const response = await this.sourceDatabase.findOneSource(_id, user)

            this.logger.log("OUT - findOneSource service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  findOneSource service - ${error.message}`)
            throw new Error(`ERROR -  findOneSource service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async deleteOneSource(deleteOneSourceDto: deleteOneSourceDto) {
        const { _id, user } = deleteOneSourceDto
        try {
            this.logger.log("IN - deleteOneSource service!")

            const response = await this.sourceDatabase.deleteOneSource(_id, user)

            this.logger.log("OUT - deleteOneSource service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  deleteOneSource service - ${error.message}`)
            throw new Error(`ERROR -  deleteOneSource service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }

}