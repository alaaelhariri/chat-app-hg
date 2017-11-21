import { Injectable } from '@angular/core';
import  chats  from '../chats'

@Injectable()
export class ChatServiceService {

  constructor() { }


  chats = [];

  getChats() {
    return chats;
  }

  addChat(chat) {

    //check chat  username and message
    //push chat
    console.log(chat.username  + ' ' + chat.message);
    chats.push(chat);


    //check if added to chats
    //reset localStorage to chats
    console.log("new chat added " + chats.length);
    localStorage.setItem("chats", JSON.stringify(chats))
  }

}
