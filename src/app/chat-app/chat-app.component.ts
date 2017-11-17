import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Form} from '@angular/forms';

import {DeepStreamService} from '../services/deep-stream.service'

@Component({
  selector: 'ca-hg-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  username = 'a_chatter';

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

  constructor(private _fb: FormBuilder, private _dss: DeepStreamService ) { }

  ngOnInit() {
    // initialize message form
    this.sendChatForm = this._fb.group(
      {
        message: []
      }
    );

    //get username from user
    this.username = window.prompt('Please enter a username', this.username);

    this._dss.login(null, this.handleLogin);


  }

  handleLogin(success, data) {
    console.log('logged in', success, data)
  }

  addChat(msg) {
  }

}
