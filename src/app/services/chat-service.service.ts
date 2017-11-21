import { Injectable } from '@angular/core';
import  chats  from '../chats'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ChatServiceService {

  constructor() { }

  private chatSource = new BehaviorSubject<Object[]>([]);
  currentChat = this.chatSource.asObservable();

  chats = [];

  getChats() {
    return chats;
  }

  addChat(chat: Object) {
    this.chatSource.getValue().push(chat);
    this.chatSource.next( this.chatSource.getValue() )
  }

}
