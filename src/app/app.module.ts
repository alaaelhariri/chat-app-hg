import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { MainPageComponent } from './main-page/main-page.component';

import { routing } from './app.router';

import { DeepStreamService } from './services/deep-stream.service';
import {ChatServiceService} from './services/chat-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatAppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    DeepStreamService,
    ChatServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
