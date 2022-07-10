import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rooms } from './entity/room.entity';

@Injectable()
export class RoomsService {
    constructor(@InjectRepository(Rooms) private roomsRepo:Repository<Rooms>)  {}
    createRoom(body:any) {
        const room = this.roomsRepo.create(body);
        return this.roomsRepo.save(room);
    }
    fetchRooms() {
        return this.roomsRepo.find();
    }
    fetchSingleRoom(id: string) {
        return this.roomsRepo.findOne(id);
    }
}
