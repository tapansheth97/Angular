import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor() { }

  employeeList: Employee[] = [
    {
      fname : 'tapam',
      lname : 'sheth',
      email : 'tapansheth@promactinfo.com',
      contact : '9998621903',
      address : 'Anand',
      uname : 'tapansheth',
      pass : 'promact2018',
      gender : 'male',
      qualification : 'B.TECH',
      experience : '1-3 Yrs',
      cplus : true,
      java : false,
      csharp : false,
      php : true,
      python : true
    }
    ]
   

  getEmployees() {
    return this.employeeList;
  }

  addEmployee(employee: Employee) {
    this.employeeList.push(employee);
  }

  findEmployee(uname: string) {
    let selectedEmp: Employee = null;
    this.employeeList.forEach(emp => {
      if (emp.uname === uname) {
        selectedEmp = emp;
      }
    });
    return selectedEmp;
  }

  removeEmployee(uname: string) {
    const index = this.employeeList.findIndex(emp => emp.uname === uname);
    this.employeeList.splice(index, 1);
  }

  editEmployee(uname: string, newEmployee: Employee) {
    const index = this.employeeList.findIndex(emp => emp.uname === uname);
    this.employeeList[index] = newEmployee;
  }
}
