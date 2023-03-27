import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator"

export class addExpenseDto {
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

export class findAllExpensesDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user: String;
}

export class findSummaryByMonthDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly year: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly month: number;
}

export class findSummaryByYearDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly year: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user: String;
}

export class findSummaryByTodayDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user: String;
}