import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  constructor(public employeedata: EmployeeDataService, public router: Router, public route: ActivatedRoute) { }

  public qualifications: string[]; experiences: string[];
  public languages: MyLanguage[] = [];
  public empModel: Employee;
  public oldUname: string;

  ngOnInit() {
    this.qualifications = ['MCA', 'BCA', 'MSCIT', 'B.TECH'];
    this.experiences = ['0-1 Yrs', '1-3 Yrs', '3-5 Yrs', '5+ Yrs'];
    this.generateCheckbox();

    const uname = this.route.snapshot.paramMap.get('uname');
    console.log(uname);
    this.empModel = this.employeedata.findEmployee(uname);
    this.oldUname = this.empModel.uname;
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
    console.log(this.empModel);
    this.employeedata.editEmployee(this.oldUname, this.empModel);
    this.router.navigate(['']);
  }

}
 class MyLanguage {
  constructor(public id: string, public name: string, public selected: boolean) {
  }
}
