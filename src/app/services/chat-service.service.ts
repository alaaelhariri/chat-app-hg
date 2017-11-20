import { Injectable } from '@angular/core';
import  chats  from '../chats'

@Injectable()
export class ChatServiceService {

  constructor() { }

  chat = chats;

  getChats() {
    return chats;
  }

  addChat(chat) {
    chats.push(chat);
    return chats;
  }

}
