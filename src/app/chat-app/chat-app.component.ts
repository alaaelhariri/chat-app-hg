import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Form} from '@angular/forms';

@Component({
  selector: 'ca-hg-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  chat_array = [
    {
      username : "user1",
      message : "message of user1"
    },
    {
      username : "user2",
      message : "message of user2"
    }

  ];

  sendChatForm: FormGroup;

  constructor(private _fb: FormBuilder ) { }

  ngOnInit() {
    this.sendChatForm = this._fb.group(
      {
        username: [],
        message: []
      }
    )
  }

  addChat(usr, msg) {
    this.chat_array.push(
      {
        username : usr,
        message : msg
      }
    );
  }

}
