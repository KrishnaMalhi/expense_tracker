import { Inject, Injectable, Logger, LoggerService } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";
import { Category } from "src/schemas/category.schema";
// import { AllExceptionsFilter } from "src/utils/exceptionFilter.utils";

@Injectable()
export class CategoryDatabase {
    constructor(@InjectModel('Category') private categoryModel: Model<Category>, @Inject(Logger) private readonly logger: LoggerService) { }
    async addCategory(name: String, userId: String) {
        try {
            this.logger.log("IN - addCategory database query!")

            const response = await this.categoryModel.create({
                name,
                user: userId
            })

            this.logger.log("OUT - addCategory database query!")

            return response;
        } catch (error) {
            this.logger.error(`ERROR - addCategory database query - ${error.message}`)
            throw new Error(`ERROR - addCategory database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findAllCategories(userId: String) {
        try {
            this.logger.log("IN - findAllCategories database query!")

            const response = await this.categoryModel.find({ user: userId })

            this.logger.log("OUT - findAllCategories database query!")

            return response;
        } catch (error) {
            this.logger.error(`ERROR - findAllCategories database query - ${error.message}`)
            throw new Error(`ERROR - findAllCategories database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findOneCategory(categoryId: String, userId: String) {
        try {
            this.logger.log("IN - findOneCategory database query!")

            const response = await this.categoryModel.findOne({ _id: categoryId, user: userId })

            this.logger.log("OUT - findOneCategory database query!")

            return response;
        } catch (error) {
            this.logger.error(`ERROR - findOneCategory database query - ${error.message}`)
            throw new Error(`ERROR - findOneCategory database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async deleteOneCategory(categoryId: String, userId: String) {
        try {
            this.logger.log("IN - deleteOneCategory database query!")

            const response = await this.categoryModel.findOneAndDelete({ _id: categoryId, user: userId })

            this.logger.log("OUT - deleteOneCategory database query!")

            return response;
        } catch (error) {
            this.logger.error(`ERROR - deleteOneCategory database query - ${error.message}`)
            throw new Error(`ERROR - deleteOneCategory database query - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
}