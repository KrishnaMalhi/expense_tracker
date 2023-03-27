import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { SourceController } from 'src/controllers/source.controller';
import { SourceDatabase } from 'src/database/source.database';
import { SourceSchema } from 'src/schemas/source.schema';
import { SourceService } from 'src/services/source.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Source", schema: SourceSchema }])],
    controllers: [SourceController],
    providers: [SourceService, SourceDatabase, Logger]
})
export class SourceModule { }
