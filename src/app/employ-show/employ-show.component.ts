import { Component, OnInit } from '@angular/core';
import { EmployService } from 'src/app/employ.service';
import { Employ } from 'src/app/employ';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-employ-show',
  templateUrl: './employ-show.component.html',
  styleUrls: ['./employ-show.component.css']
})
export class EmployShowComponent implements OnInit {

  emp : Observable<Employ>;
  empid : number;
   constructor(private userService: EmployService) { 
      this.empid=parseInt(localStorage.getItem("empId"));
      this.emp = userService.getEmp(this.empid);
   }
  ngOnInit() {
  }

}
