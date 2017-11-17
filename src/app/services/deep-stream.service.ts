import { Injectable } from '@angular/core';
declare var deepstream: any;

@Injectable()
export class DeepStreamService {

  private deepS;
  public deepSInstance;

  constructor() {
    this.deepS = this.deepSInstance = deepstream('localhost:6020');
  }

  login (credentials?, loginHandler?) {
    //allows you to "log in" to the server created by deepstream
    this.deepS.login(credentials, loginHandler)
  }
}

