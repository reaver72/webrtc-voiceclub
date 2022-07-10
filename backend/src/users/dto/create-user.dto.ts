import { IsBoolean,IsString } from "class-validator"

export class CreateUserDto{
    @IsString()
    phone:string

    @IsBoolean()
    isActivated: boolean
    
}