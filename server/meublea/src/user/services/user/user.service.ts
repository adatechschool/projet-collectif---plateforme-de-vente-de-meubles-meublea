import { Injectable, ValidationError } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { User } from 'src/typeorm/entities/User.entity';
import { CreateUserDto } from 'src/user/dtos/CreateUser.dto';
import { CreateUserParams, UpdateUserParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    findUsers() {
        return this.userRepository.find();
    }


    createUser(userDetails: CreateUserParams) {
        // New instance of User based on the userDetails
        const newUser = this.userRepository.create({ 
            ...userDetails
        });
        // Save it into the database. Return a promise.
        return this.userRepository.save(newUser);
    }


    async validateUser(userDetails: CreateUserParams): Promise<ValidationError[]> {
        // Create a new instance of CreateUserDto
        const createUserDto = new CreateUserDto();

        // Copy property values from userDetails to createUserDto
        Object.assign(createUserDto, userDetails);

        // Perform validation on the createUserDto object
        // and return the array of validation errors
        return await validate(createUserDto);
    }

    updateUser(id: number, updateUserDetails: UpdateUserParams) {
        return this.userRepository.update({ id }, { ...updateUserDetails });
    }
}
