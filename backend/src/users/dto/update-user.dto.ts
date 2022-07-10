import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class updateUserDto {

    
    @IsString()
    name:string

    @IsBoolean()
    @IsOptional()
  isActivated: boolean;
}
