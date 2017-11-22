import { Injectable, OnInit } from '@angular/core';
import  chats  from '../chats'

@Injectable()
export class ChatServiceService {

  constructor() { }

  addChat(chat) {

    //create localStorage item chats in case it wasn't there
    if(!localStorage.getItem("chats")) localStorage.setItem("chats", JSON.stringify([]))

   // setting local storage to old local storage concatenated with the new chat
    localStorage.setItem("chats", JSON.stringify(
      JSON.parse(
          localStorage.getItem("chats")
        ).concat([chat])
      )
    )
  }

}
