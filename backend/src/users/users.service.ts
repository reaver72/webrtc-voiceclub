import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { updateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly usersRepo:Repository<User>){}
    async createUser(phone: string, isActivated: boolean = false)  {
       
        const newUser = this.usersRepo.create({ phone, isActivated})
        
        const user = await this.usersRepo.save(newUser)
        return {user}

       
    }
    async getUser(id:number) {
        const user = await this.usersRepo.find({id})
       return user
    }

    async activateUser(body:updateUserDto,id:number,isActivated:boolean=true) {
        const user = await this.getUser(id)
        if (!user) {
            throw new BadRequestException("User not found!")
        }
        user[0].isActivated = isActivated
        user[0].name = body.name
        const activatedUser = await this.usersRepo.save(user)
        return {user:activatedUser[0]}
    }
}
