import { Component, OnInit } from '@angular/core';
import { LeaveDetails } from 'src/app/leave-details';
import { EmployService } from 'src/app/employ.service';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor(public applyLeaveService:EmployService, public router : Router) {
    this.empId=parseInt(localStorage.getItem("empId"));
    alert(this.empId);
   }
  model=new LeaveDetails();
  message:string;
  msg:String;
  empId : number;
  isValidFormSubmitted = false;
  calculateDays() {
    let date1: string=this.model.leaveSdate.toString();
    let date2: string=this.model.leaveEdate.toString();
    let diffInMs: number = Date.parse(date2) - Date.parse(date1);
    let diffInHours: number = diffInMs / 1000 / 60 / 60/24;
    this.model.leaveNdays=diffInHours + 1;
    
   // alert(diffInHours);
    //console.log(diffInHours);

    //alert("Event Fired");
}

applyLeave(form: NgForm)
{
    this.isValidFormSubmitted=false;
    if(form.invalid){
   //     alert("Invalid");
     return; 
  }  
    console.log ('end date component' + this.model.leaveEdate);
    this.applyLeaveService.applyLeave(this.model,this.empId).subscribe(
        success => {
            this.msg=success;
        },
        err => { 
            this.msg=err;
            console.log(err);
        }
    )
    this.isValidFormSubmitted = true;
    setTimeout(() => {
      this.router.navigate(['/Employ'])
    }
    , 3000);
}

  ngOnInit() {
  }

}
