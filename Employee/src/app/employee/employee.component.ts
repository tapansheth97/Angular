import { Component, OnInit } from '@angular/core';
import { employee } from '../models/employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  model = new employee();
  quals:string[]=['ENGINEERING','BCA/MCA','MSCIT','OTHER'];
  exps:string[]=['NONE','FRESHER','EXPRIENCED'];
  code:string[]=['c/c++','java','c#','php','python'];
  ngOnInit() {

  }

  Onsubmit(){
    console.log(this.model);
  }

}


