import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class RegisterDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail({}, { message: "Please enter correct email" })
    readonly email: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly role: String

    // @IsString()
    // readonly role: String;

    // @IsArray()
    // readonly categories: [];

    // @IsArray()
    // readonly sources: [];

}

export class LoginDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail({}, { message: "Please enter correct email" })
    readonly email: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: String;

}