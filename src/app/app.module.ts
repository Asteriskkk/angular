import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CalComponent } from './cal/cal.component';
import { NameComponent } from './name/name.component';
import { CountryComponent } from './country/country.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { EmployComponent } from './employ/employ.component';
import { EmployService } from 'src/app/employ.service';
import { HttpModule } from '@angular/http';
import { EmployShowComponent } from './employ-show/employ-show.component';
import { ManagerShowComponent } from './manager-show/manager-show.component';
import { DashBoardDbComponent } from './dash-board-db/dash-board-db.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';


const appRoutes :Routes =[
  {path:'cal',component:CalComponent},
  {path:'name',component:NameComponent},
  {path:'country',component:CountryComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashBoardComponent},
  {path:'MyDetails',component:EmployShowComponent},
  {path:'DashBoardDb',component:DashBoardDbComponent},
  {path:'Employ',component:EmployComponent},
  {path:'',component:EmployComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CalComponent,
    NameComponent,
    CountryComponent,
    EmployeeComponent,
    LoginComponent,
    DashBoardComponent,
    EmployComponent,
    EmployShowComponent,
    ManagerShowComponent,
    DashBoardDbComponent,
    ApplyLeaveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpModule,
    RouterModule.forRoot(appRoutes)  //register Routes where we defien all the route path ^
      
  ],
  providers: [EmployService],
  bootstrap: [AppComponent]
})
export class AppModule { }
