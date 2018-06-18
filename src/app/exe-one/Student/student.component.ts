import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: 'student.component.html',
  styleUrls: ['student.component.css'],
})

export class StudentComponent implements OnInit {

    constructor(
        private studentService: StudentService,
        private router: Router
    ) {}
    private listStudent: any[];
    private page: any[];

    showListStudent() {
        this.studentService.GetList().subscribe(
        (response: any) => {
            this.listStudent = response;
        },
        );
    }

    delete(id) {
        const confirmStatus = confirm('Bạn có chắc chắn muốn xóa');
        if (confirmStatus) {
        this.studentService.Delete(id).subscribe(response => {
            this.router.navigate(['student']);
        });
        }
    }

    ngOnInit() {
        this.showListStudent();
        this.page = [1, 2, 3, 4, 5];
    }
}
