import {RouterModule, Route} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ChatAppComponent} from './chat-app/chat-app.component';
import {MainPageComponent} from './main-page/main-page.component';



const routes: Route[] = [

  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'chat/:username',
    component: ChatAppComponent,
  },
  {
    path: '',
    redirectTo: '/main', pathMatch: 'full'
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: false
  }
);
