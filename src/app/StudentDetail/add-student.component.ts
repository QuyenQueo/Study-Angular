import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../services/student.service';

@Component({
    selector: 'add-student',
    templateUrl: 'add-student.component.html',
    styleUrls: ['add-student.component.css']
})

export class AddStudentComponent implements OnInit {
    public student: any;
    
    constructor(
        private studentService: StudentService,
        private router: Router
    ) {}

    SaveForm() {
        this.studentService.Add(this.student).subscribe(
            response => {
                this.router.navigate(['student'])
            }
        )
    }

    ngOnInit() {
        this.student = {};
    }
}