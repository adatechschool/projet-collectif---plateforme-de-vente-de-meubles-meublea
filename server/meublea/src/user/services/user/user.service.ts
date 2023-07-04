import { HttpException, HttpStatus, Injectable, ValidationError } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { User } from 'src/typeorm/entities/User.entity';
import { CreateUserDto } from 'src/user/dtos/CreateUser.dto';
import { CreateUserParams, UpdateUserParams } from 'src/utils/type';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    findUsers() {
        return this.userRepository.find();
    }

    findUsersById(id: number) {
        return this.userRepository.findOne({ where: { id } });
    }

    async createUser(userDetails: CreateUserParams) {

        //Check if the mail used to register already exist in DB
        const existingUser = await this.userRepository.findOne({ where: { mail: userDetails.mail } });
        if (existingUser) {
            throw new HttpException('User with this email already exists', HttpStatus.BAD_REQUEST);
        }


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

    async deleteUser(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }

    // Login
    async validateCredentials(
        mail: string,
        password: string
    ): Promise<{
        isValid: boolean;
        userId?: number;
        isAdmin?: boolean;
    }> {

        // Retrieve the user from the database based on the email
        const user = await this.userRepository.findOne({ where: { mail } });

        // If no user is found or the password doesn't match
        if (!user || user.password !== password) {
            return { isValid: false };
        }

        if (mail === "fleury@test.com") {
            return { isValid: true, userId: user.id, isAdmin: true };
        }

        // If they match
        return { isValid: true, userId: user.id };
    }
}
