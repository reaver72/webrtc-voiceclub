import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Res,
  Req,
  HttpCode,
  BadRequestException
} from '@nestjs/common';
import {Request, Response} from "express"
import { User } from 'src/users/entity/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller('api/otp')
export class AuthController {
  constructor(private authService: AuthService, private usersService:UsersService) {}

 

  @Get("generate-otp")
  generateOtp() {
    return this.authService.generateOtp()
  }
  // @Get("hash-otp")
  // hashedOtp(@Body("otp") otp:number) {
  //   return this.authService.hashOtp(otp)
  // }
  @Post("send-otp-sms")
  sendOtpBySms(@Body("phone") phoneNum: number) {
    const otp = this.authService.generateOtp()
    const hashedOtp = this.authService.hashOtp(otp)
    // res.cookie("otp", hashedOtp, {
    //   httpOnly: true,
    //   maxAge: 0.25*60*1000
    // })
    // res.cookie("phone", phoneNum, {
    //   maxAge:1000*60
    // })

    // res.send('success')
    
    return this.authService.sendOtpBysms(phoneNum, otp)
  }


  @Post("verify-otp")
    @HttpCode(200)
  async verifyOtp(@Body() body: any) {
    if (body.hashedOtp) {
     return this.authService.verifyOtp(body.otp, body.hashedOtp, body.phone)
   }

  }
}
