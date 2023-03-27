import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator"

export class addIncomeDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly amount: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly category: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly source: String;
}

export class findAllIncomesDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user: String;
}
