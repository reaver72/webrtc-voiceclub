import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('create-user')
  createUser(@Body() body: any) {
    return this.userService.createUser(body.phone);
  }
  @Get("/:id")
  getUser(@Param('id') id:number) {
    return this.userService.getUser(id);
  }

  @Patch('/:id')
  activateUSer(@Body() body: updateUserDto, @Param('id') id: number) {
    return this.userService.activateUser(body,id);
  }
}
