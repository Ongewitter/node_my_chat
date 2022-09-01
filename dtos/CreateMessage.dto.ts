import { User } from 'models/User';

export class CreateMessageDto {
  text: string;
  author: User;
}
