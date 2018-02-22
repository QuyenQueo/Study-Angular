import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'detail-student',
  templateUrl: 'detailStudent.component.html',
  styleUrls: ['detailStudent.component.css'],
})

export class DetailStudentComponent implements OnInit, OnDestroy {
  public _id: number;
  public subscription: Subscription;
  public detaiStudent: any;
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) {}
  showDetailStudent(id) {
    this.studentService.GetDetailStudent(id).subscribe(student => {
      this.detaiStudent = student;
    })
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