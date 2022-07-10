import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';

@Controller('/api/v1/rooms')
export class RoomsController {
    constructor(private readonly roomService: RoomsService) { }
    @Post()
    createRoom(@Body() body: any) {
        return this.roomService.createRoom(body);
    }
    @Get()
    fetchRooms() {
        return this.roomService.fetchRooms();
    }
    @Get('/:id')
    fetchSingleRoom(@Param("id") id: string) {
        return this.roomService.fetchSingleRoom(id);
    }
}
