import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator"


export class findAllUsersDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly _id: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly role: String;
}