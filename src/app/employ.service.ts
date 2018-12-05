import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Employ } from "./employ";
import { LeaveDetails } from 'src/app/leave-details';

@Injectable({
  providedIn: 'root'
})
export class EmployService {

  constructor(private http: Http) {
  }
   getEmps(): Observable<Employ[]> {
     return this.http.get
     ("http://localhost:8080/ftp86/api/employees")
        .map((res: Response) => res.json())
  .catch((error: any) =>
   Observable.throw(error.json().error || 'Server error'));
  }

  getEmp(empid): Observable<Employ> {
    return this.http.get
    ("http://localhost:8080/ftp86/api/employees/" +empid)
       .map((res: Response) => res.json())
 .catch((error: any) =>
  Observable.throw(error.json().error || 'Server error'));
 }
  
 applyLeave(leavedetails:LeaveDetails,empid : number):Observable<String>{
  return this.http.post('http://localhost:8080/ftp86/api/employees/applyleave/' +empid,leavedetails)
   .map(response=>response.text()) 
 }

}
