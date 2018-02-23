import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {StudentService} from '../services/student.service';

@Component({
	selector: 'edit-student',
	templateUrl: 'edit-student.component.html',
	styleUrls: ['edit-student.component.css']
})

export class EditStudentComponent implements OnInit {

	private studentEdit: any;
	private _id: number;

	constructor(
		private studentServide: StudentService,
		private router: Router
	) {}
	
	ngOnInit() {
		this._id = this.router.params['id']
		showStudentEdit(id: number) {
			this.studentServide.GetDetailStudent(id).subscribe(response => {
				this.studentEdit = response;
			})
		}
	}
}