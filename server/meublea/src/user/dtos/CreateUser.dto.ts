import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: 'username field is mandatory'})
    username: string;

    @IsNotEmpty({ message: 'mail field is mandatory'})
    mail: string;

    @IsNotEmpty({ message: 'password field is mandatory'})
    password: string;
}