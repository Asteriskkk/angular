import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name:string;

  employees = [new Employee(1,'piyush','java','developer',9895),
  new Employee(2,'rahul','angular','expert',4543),
  new Employee(3,'anshu','react','developer',6764),
  new Employee(4,'richa','java','TeamLead',6767),
  new Employee(5,'sonal','python','developer',6767)
];
id:number;
  constructor(private router : Router) { }
show(name,id)
{
  this.name = name;
  this.id = id;
  localStorage.setItem("name",name);
   this.router.navigate(["/login"]);
}
  ngOnInit() {
  }

}
