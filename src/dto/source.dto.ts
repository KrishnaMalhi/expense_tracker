import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator"

export class addSourceDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user: String;
}

export class findAllSourcesDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user: String;
}

export class findOneSourceDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly _id: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user: String;
}

export class deleteOneSourceDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly _id: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user: String;
}