import { BadRequestException, Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as crypto from 'crypto';
import { Request, Response } from 'express';
import { User } from 'src/users/entity/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

const twilio = require('twilio')(
  'AC5a052b153ad35b963d2e6c48fef0f722',
  '893dc9f97e5f9295f9b1942da362faca',
  {
    lazyLoading: true,
  },
);
@Injectable()
export class AuthService {
  constructor(private usersService:UsersService){}


  generateOtp() {
    const otp = crypto.randomInt(100000, 999999);
    return otp;
  }

  hashOtp(otp: number) {
    const data = `${otp}`;
    const hashedOtp = crypto
      .createHmac('sha256', 'wryip')
      .update(data)
      .digest('hex');
    return hashedOtp;
  }

  async sendOtpBysms(phone: number, otp: number) {
    // return await twilio.messages.create({
    //   to: phone,
    //   from: '+14127537249',
    //   body:`Your Voice Club OTP is ${otp}`
    // });
    console.log(otp);
    return { phone, hash: this.hashOtp(otp) };
  }

  async verifyOtp(otp: number, hashedOtp: string, phone: number) {
    const newHashOtp = this.hashOtp(otp);
    if (hashedOtp !== newHashOtp) {
      console.log('invalid otp');
      throw new BadRequestException('Invalid OTP!');
    }
    console.log(' otp verified ');

    

  }
}
