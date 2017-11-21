import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {ChatServiceService} from '../services/chat-service.service';
import chats from '../chats'

@Component({
  selector: 'ca-hg-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  @Output() chatEvent = new EventEmitter<any>();

  username = 'a_chatter';

  chats_array = JSON.parse(localStorage.getItem("chats"));

  test_chats=localStorage.getItem("chats");

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
    console.log(JSON.parse(localStorage.getItem("chats")))
    this.chats_array = JSON.parse(localStorage.getItem("chats"));
  }


}
