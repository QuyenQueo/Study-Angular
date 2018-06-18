import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StudentService } from '../services/student.service';

@Component({
    selector: 'app-detail-student',
    templateUrl: 'detailStudent.component.html',
    styleUrls: ['detailStudent.component.css'],
})

export class DetailStudentComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: any;
    public detaiStudent: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private studentService: StudentService
    ) {}

    showDetailStudent(id) {
        this.studentService.GetDetailStudent(id).subscribe(student => {
        this.detaiStudent = student;
        });
    }

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
        this._id = params['id'];
        this.showDetailStudent(this._id);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
