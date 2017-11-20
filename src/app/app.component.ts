import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chats = [
    {
      username: "a_user",
      message: "sending a message"
    }

  ];

  title = 'app';
}
