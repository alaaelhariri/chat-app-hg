import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {ChatServiceService} from '../services/chat-service.service';

@Component({
  selector: 'ca-hg-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  //default username (just in case)
  username = 'a_chatter';

  //chats to display
  chats_array = JSON.parse(localStorage.getItem("chats"));

  //chat form
  sendChatForm: FormGroup;

  constructor(private _fb: FormBuilder, private _route: ActivatedRoute, private _cs: ChatServiceService ) { }


  ngOnInit() {
    // initialize message form
    this.sendChatForm = this._fb.group({ message: [] });

    //get username
    this.username = this._route.snapshot.params.username;


  }


  addChat(msg) {

    // add new chat
    this._cs.addChat({username: this.username, message: msg });

    //checking if chat added
    console.log(JSON.parse(localStorage.getItem("chats")));

    //resetting chats array display
    this.chats_array = JSON.parse(localStorage.getItem("chats"));
  }


}
