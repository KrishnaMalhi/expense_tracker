import { Inject, Injectable, Logger, LoggerService } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";
import { Source } from "src/schemas/source.schema";
// import { AllExceptionsFilter } from "src/utils/exceptionFilter.utils";

@Injectable()
export class SourceDatabase {
    constructor(@InjectModel('Source') private sourceModel: Model<Source>, @Inject(Logger) private readonly logger: LoggerService) { }
    async addSource(name: String, userId: String) {
        try {
            this.logger.log("IN - addSource database query!")

            const response = await this.sourceModel.create({
                name,
                user: userId
            })

            this.logger.log("OUT - addSource database query!")

            return response;
        } catch (error) {
            this.logger.error(`ERROR - addSource database query - ${error.message}`)
            throw new Error(`ERROR - addSource database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findAllSources(userId: String) {
        try {
            this.logger.log("IN - findAllSources database query!")
            this.logger.log("IN - findAllSources database query!", userId)

            const response = await this.sourceModel.find({ user: userId })

            this.logger.log("OUT - findAllSources database query!")

            return response;
        } catch (error) {
            this.logger.error(`ERROR - findAllSources database query - ${error.message}`)
            throw new Error(`ERROR - findAllSources database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findOneSource(sourceId: String, userId: String) {
        try {
            this.logger.log("IN - findOneSource database query!")

            const response = await this.sourceModel.findOne({ _id: sourceId, user: userId })

            this.logger.log("OUT - findOneSource database query!")

            return response;
        } catch (error) {
            this.logger.error(`ERROR - findOneSource database query - ${error.message}`)
            throw new Error(`ERROR - findOneSource database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async deleteOneSource(sourceId: String, userId: String) {
        try {
            this.logger.log("IN - deleteOneSource database query!")

            const response = await this.sourceModel.findOneAndDelete({ _id: sourceId, user: userId })

            this.logger.log("OUT - deleteOneSource database query!")

            return response;
        } catch (error) {
            this.logger.error(`ERROR - deleteOneSource database query - ${error.message}`)
            throw new Error(`ERROR - deleteOneSource database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}