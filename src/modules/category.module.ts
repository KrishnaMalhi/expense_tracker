import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { CategoryController } from 'src/controllers/category.controller';
import { CategoryDatabase } from 'src/database/category.database';
import { CategorySchema } from 'src/schemas/category.schema';
import { CategoryService } from 'src/services/category.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Category", schema: CategorySchema }])],
    controllers: [CategoryController],
    providers: [CategoryService, CategoryDatabase, Logger]
})
export class CategoryModule { }
