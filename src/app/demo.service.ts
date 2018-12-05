import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  sayHello() : string {
    return "Hello world....";
  }

  logout() : string {
    return "Its 7 PM Please Logout...";
  }
  constructor() { }
}
