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

  chats_list;
  chats_array = [];

  sendChatForm: FormGroup;

  constructor(private _fb: FormBuilder, private _dss: DeepStreamService ) { }

  ngOnInit() {
    // initialize message form
    this.sendChatForm = this._fb.group({ message: [] });

    // get username from user
    this.username = window.prompt('Please enter a username', this.username);

    // faux log in
    this._dss.login(null, this.handleLogin);

    // making sure we can list the chats
    this.chats_list = this._dss.getList('chats');

    this.chats_list.on('entry-added', recordName => {
      this._dss.getRecord(recordName).whenReady( record => {
        record.subscribe( data => {
          if(data.username && data.message) this.chats_array.push(data)
        }, true)
      })
    })


  }

  handleLogin(success, data) {
    console.log('logged in', success, data)
  }

  addChat(msg) {

    const recordName = 'chat/' + this._dss.deepSInstance.getUid();
    const chatRecord = this._dss.getRecord(recordName);

    // make this record have the current username and the message he/she wants to send
    chatRecord.set({username: this.username, message: msg});

    this.chats_list.addEntry(recordName);

  }



}
