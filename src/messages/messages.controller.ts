import { Body, Controller, Get, Post } from '@nestjs/common';
import MessagesService from './messages.service';
import { CreateMessageDto } from 'dtos/CreateMessage.dto';

@Controller('messages')
export default class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  getAllMessages() {
    return this.messagesService.getAllMessages();
  }

  @Post()
  async createMessage(@Body() message: CreateMessageDto) {
    return this.messagesService.createMessage(message);
  }
}
