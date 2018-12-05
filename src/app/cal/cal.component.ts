import { Component, OnInit } from '@angular/core';
import {Calc} from '../calc';
import { DemoService } from 'src/app/demo.service';
@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
  model =new Calc();
  obj = new DemoService();
  company : string;
  constructor() { 
    this.company = "Hexaware";
    localStorage.setItem("company",this.company);
    alert(this.obj.sayHello());
    alert(this.obj.logout());
  }
  sum()
  {
    this.model.res = this.model.fno + this.model.sno;
  }
  sub()
  {
    this.model.res = this.model.fno - this.model.sno;
  }
  mul()
  {
    this.model.res = this.model.fno * this.model.sno;
  }
  
  ngOnInit() {
  }

}
