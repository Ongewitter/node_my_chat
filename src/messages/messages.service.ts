import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from 'dtos/CreateMessage.dto';
import { Message } from 'models/Message';

@Injectable()
export default class MessagesService {
  private lastMessageId = 0;
  private messages: Message[] = [];

  getAllMessages() {
    return this.messages;
  }

  createMessage(message: CreateMessageDto) {
    const newMessage = {
      id: ++this.lastMessageId, 
      ...message,
    };
    this.messages.push(newMessage);
    console.log(message, newMessage, this.messages);
    return newMessage;
  }
}
