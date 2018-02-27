import {Component, OnInit} from '@angular/core';
import {StudentService} from '../services/student.service';

@Component({
    selector: 'add-student',
    templateUrl: 'add-student.component.html',
    styleUrls: ['add-student.component.css']
})

export class AddStudentComponent implements OnInit {
    public student: any;
    
    constructor(
        private studentService: StudentService
    ) {}

    SaveForm() {
        this.studentService.Add(this.student).subscribe(
            response => {
                console.log('Them du lieu thanh cong');
            }
        )
    }

    ngOnInit() {
        this.student = {};
    }
}