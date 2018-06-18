import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: 'edit-student.component.html',
  styleUrls: ['edit-student.component.css']
})

export class EditStudentComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: any;
    public studentEdit: any;

    constructor(
            private activatedRoute: ActivatedRoute,
            private router: Router,
        private studentService: StudentService,
        private route: Router
    ) { }

    showStudentEdit(id) {
        this.studentService.GetDetailStudent(id).subscribe(student => {
            this.studentEdit = student;
        });
    }

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];
            this.showStudentEdit(this._id);
        });
    }

    SaveForm() {
        this.studentService.Update(this._id, this.studentEdit).subscribe(response => {
            console.log('Update thanh cong');
            this.route.navigate(['student']);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
