import { Component, OnInit, ElementRef } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  constructor(public employeedata: EmployeeDataService, public router: Router) { }

  ngOnInit() {
    this.employees = this.employeedata.getEmployees();
  }

  onEdit(uname: string) {
    let editempdata: Employee;
    this.employees.forEach(emp => {
      if (emp.uname === uname) {
        editempdata = emp;
      }
    });
    this.router.navigate(['edit', editempdata.uname]);
  }

  onAdd() {
    this.router.navigate(['add']);
  }

  onDelete(uname: string) {
    this.employeedata.removeEmployee(uname);
    this.router.navigate(['employeelist']);
  }
}
