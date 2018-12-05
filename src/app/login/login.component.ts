import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model = new Login();
  constructor(private router : Router) {
    this.model.userName=localStorage.getItem("name");
   }
   Login() {
      if(this.model.password=="Hexaware") {
      this.router.navigate(["/dashboard"]);
      }
      else {
        alert("Invalid");
      }
     }
  ngOnInit() {
  }

}
