import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatAppComponent } from './chat-app/chat-app.component';

import { DeepStreamService } from './services/deep-stream.service'

@NgModule({
  declarations: [
    AppComponent,
    ChatAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DeepStreamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
