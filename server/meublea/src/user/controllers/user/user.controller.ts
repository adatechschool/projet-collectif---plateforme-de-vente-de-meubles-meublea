import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, ValidationError } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/user/dtos/UpdateUser.dto';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    async getUsers() {
        const users = await this.userService.findUsers();
        return users;
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        // Check for errors specified in CreateUser.dto.ts
        const errors: ValidationError[] = await this.userService.validateUser(createUserDto);

        if (errors.length > 0) {
            // if there's any, throw a 400 with corresponding error messages
            const errorMessages = errors.map(error => Object.values(error.constraints)).flat();
            throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: errorMessages }, HttpStatus.BAD_REQUEST);
        }

        // If everything is fine, return a 201
        return this.userService.createUser(createUserDto);
    }


    // If request to localhost:3000/user/asdsd (or any string)
    // ParseIntPipe make it a 400 : Bad Request "Validation failed (numeric string is expected)"
    @Put(':id')
    async updateUserById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto
    ) {
        await this.userService.updateUser(id, updateUserDto)
    }


    // Login
    @Post('authentification')
    async validateCredentials(
        @Body()
        credentials: { mail: string; password: string; }
    ) {
        const { mail, password } = credentials;

        // Call the validateCredentials method in the UserService
        const { isValid, userId, isAdmin } = await this.userService.validateCredentials(mail, password);

        // Throw a 401 error if mail/password aren't in database
        if (!isValid) {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }

        const response: any = { isValid, userId };

        // Check if the user is the admin
        if (isAdmin) {
            response.isAdmin = "C\'est Fleury !!!"
        }

        return response;
    }
}
