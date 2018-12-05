import { Component, OnInit } from '@angular/core';
import { EmployService } from 'src/app/employ.service';
import { Employ } from 'src/app/employ';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {

  users : Observable<Employ[]>;
  
  show(eid,mid) {
    localStorage.setItem("empId",eid);
    localStorage.setItem("mgrId",mid);
    this.router.navigate(["/DashBoardDb"]);
  }
   constructor(private userService: EmployService, private router : Router) {
      this.users = userService.getEmps();
   }
  

  ngOnInit() {
  }

}
