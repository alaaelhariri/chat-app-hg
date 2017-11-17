import { Component } from '@angular/core';
declare var deepstream: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {
    console.log(deepstream)
  }

}
