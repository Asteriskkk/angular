import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/country';
import { DemoService } from 'src/app/demo.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  obj=new DemoService();
countries = [new Country(1,'USA'),
              new Country(2,'INDIA'),
              new Country(3,'AUSTRALIA'),
              new Country(4,'BRAZIL')];
  constructor() { 
    alert(this.obj.sayHello());
    alert(this.obj.logout());
  }

  ngOnInit() {
  }

}
