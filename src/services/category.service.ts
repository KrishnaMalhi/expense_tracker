import { Body, Inject, Injectable, Logger, LoggerService } from "@nestjs/common";
import { CategoryDatabase } from "src/database/category.database";
import { addCategoryDto, deleteOneCategoryDto, findAllCategoriesDto, findOneCategoryDto } from "src/dto/category.dto";
// import { AllExceptionsFilter } from "src/utils/exceptionFilter.utils";

@Injectable()
export class CategoryService {
    constructor(private categoryDatabase: CategoryDatabase, @Inject(Logger) private readonly logger: LoggerService) { }
    async addCategory(addCategoryDto: addCategoryDto) {
        const { name, user } = addCategoryDto
        try {
            this.logger.log("IN - addCategory service!")

            const response = await this.categoryDatabase.addCategory(name, user)

            this.logger.log("OUT - addCategory service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  addCategory service - ${error.message}`)
            throw new Error(`ERROR -  addCategory service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findAllCategories(findAllCategriesDto: findAllCategoriesDto) {
        const { user } = findAllCategriesDto
        try {
            this.logger.log("IN - findAllCategories service!")

            const response = await this.categoryDatabase.findAllCategories(user)

            this.logger.log("OUT - findAllCategories service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  findAllCategories service - ${error.message}`)
            throw new Error(`ERROR -  findAllCategories service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async findOneCategory(findOneCategoryDto: findOneCategoryDto) {
        const { _id, user } = findOneCategoryDto
        try {
            this.logger.log("IN - findOneCategory service!")

            const response = await this.categoryDatabase.findOneCategory(_id, user)

            this.logger.log("OUT - findOneCategory service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  findOneCategory service - ${error.message}`)
            throw new Error(`ERROR -  findOneCategory service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }
    async deleteOneCategory(deleteOneCategoryDto: deleteOneCategoryDto) {

        const { _id, user } = deleteOneCategoryDto
        try {
            this.logger.log("IN - deleteOneCategory service!")

            const response = await this.categoryDatabase.deleteOneCategory(_id, user)

            this.logger.log("OUT - deleteOneCategory service!")

            return response
        } catch (error) {
            this.logger.error(`ERROR -  deleteOneCategory service - ${error.message}`)
            throw new Error(`ERROR -  deleteOneCategory service - ${error.message}`)
            // throw new AllExceptionsFilter(error)
        }
    }

}