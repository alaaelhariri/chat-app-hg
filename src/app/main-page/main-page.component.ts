import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ca-hg-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  //point of the page is to get a username

  usernameForm: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router) { }

  ngOnInit() {
    this.usernameForm = this._fb.group({ username:'anonymous' })
  }

  goToChat(username) {
    this._router.navigate([`/chat/${username}`]);
  }

}
