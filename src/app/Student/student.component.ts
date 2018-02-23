import {Component, OnInit} from '@angular/core';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'student-app',
  templateUrl: 'student.component.html',
  styleUrls: ['student.component.css'],
})

export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService) {}
  private listStudent: any[];
  private page: any[];

  showListStudent() {
    this.studentService.GetList().subscribe(
      (response:any) => {
        this.listStudent = response;
      },
    );
  }

  ngOnInit() {
    this.showListStudent();
    this.page = [1,2,3,4,5];
  }
}