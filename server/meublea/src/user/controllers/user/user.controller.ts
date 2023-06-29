import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/user/dtos/UpdateUser.dto';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    async getUsers() {
        const users = await this.userService.findUsers();
        return users;
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
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
}
