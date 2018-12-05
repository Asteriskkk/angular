import { Component, OnInit } from '@angular/core';
import { EmployService } from 'src/app/employ.service';
import { Employ } from 'src/app/employ';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-manager-show',
  templateUrl: './manager-show.component.html',
  styleUrls: ['./manager-show.component.css']
})
export class ManagerShowComponent implements OnInit {

  emp : Observable<Employ>;
  empid : number;
   constructor(private userService: EmployService) { 
      this.empid=parseInt(localStorage.getItem("mgrId"));
      this.emp = userService.getEmp(this.empid);
   }
  ngOnInit() {
  }

}
