import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User.entity';
import { CreateUserParams, UpdateUserParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    findUsers() {
        return this.userRepository.find();
    }

    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({ 
            ...userDetails
        });
        return this.userRepository.save(newUser);
    }

    updateUser(id: number, updateUserDetails: UpdateUserParams) {
        return this.userRepository.update({ id }, { ...updateUserDetails });
    }
}
