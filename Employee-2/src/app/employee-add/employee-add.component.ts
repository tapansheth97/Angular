import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor(public employeedata: EmployeeDataService, public router: Router) { }

  public qualifications: string[]; experiences: string[];
  public languages: MyLanguage[] = [];
  public empModel: Employee;

  ngOnInit() {
    this.qualifications = ['MCA', 'BCA', 'MSCIT', 'B.TECH'];
    this.experiences = ['0-1 Yrs', '1-3 Yrs', '3-5 Yrs', '5+ Yrs'];
    this.generateCheckbox();
    this.empModel = new Employee();
    this.empModel.gender = 'male';
    this.empModel.experience = '--Select--';
    this.empModel.qualification = '--Select--';
  }

  generateCheckbox() {
    const cplus = new MyLanguage('cplus', 'C/C++', false);
    const java = new MyLanguage('java', 'Java', true);
    const csharp = new MyLanguage('csharp', 'C#', true);
    const php = new MyLanguage('php', 'PHP', false);
    const python = new MyLanguage('python', 'Python', false);
    this.languages.push(cplus);
    this.languages.push(java);
    this.languages.push(csharp);
    this.languages.push(php);
    this.languages.push(python);
  }

  onSubmit() {
    this.employeedata.addEmployee(this.empModel);
    this.router.navigate(['employeelist']);
  }

}
 class MyLanguage {
  constructor(public id: string, public name: string, public selected: boolean) {
  }
}
