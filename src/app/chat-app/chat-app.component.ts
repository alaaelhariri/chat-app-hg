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

  username = 'a_chatter';

  chats_array = [];

  sendChatForm: FormGroup;

  constructor(private _fb: FormBuilder, private _route: ActivatedRoute, private _cs: ChatServiceService ) { }

  ngOnInit() {
    // initialize message form
    this.sendChatForm = this._fb.group({ message: [] });
    this.username = this._route.snapshot.params.username;
    this.chats_array = this._cs.getChats();


  }


  addChat(msg) {

   this.chats_array = this._cs.addChat({ username: this.username, message: msg })


  }



}
