import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsEmail()
    @IsNotEmpty()
    @MinLength(5)
    password: string;
}