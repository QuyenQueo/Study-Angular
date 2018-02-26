import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {StudentService} from '../services/student.service';

@Component({
	selector: 'edit-student',
	templateUrl: 'edit-student.component.html',
	styleUrls: ['edit-student.component.css']
})

export class EditStudentComponent implements OnInit, OnDestroy {

	public studentEdit: any;
  public _id: number;
  public subscription: Subscription;

	constructor(
		private studentServide: StudentService,
    private activatedRoute: ActivatedRoute,
	) {}

	showStudentEdit(id: number) {
		this.studentServide.GetDetailStudent(id).subscribe(student => {
			this.studentEdit = student;
			console.log('day la hocj ssinh', this.studentEdit);
		})
	}

	ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this._id = params['id'];
      this.showStudentEdit(this._id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}