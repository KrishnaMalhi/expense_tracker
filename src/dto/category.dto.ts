import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator"

export class addCategoryDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user: String;
}

export class findAllCategoriesDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user: String;
}

export class findOneCategoryDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly _id: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user: String;
}

export class deleteOneCategoryDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly _id: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user: String;
}