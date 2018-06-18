import { NgModule } from '@angular/core';
import { itemRoute } from './item.route';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailStudentComponent } from './detailStudent.component';
import { RouterModule } from '@angular/router';
import { EditStudentComponent } from './edit-student.component';
import { AddStudentComponent } from './add-student.component';

import { StudentService } from '../services/student.service';

const ENTITY_STATES = [
    ...itemRoute,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ENTITY_STATES),
    ],
    declarations: [
        DetailStudentComponent,
        EditStudentComponent,
        AddStudentComponent,
    ],
    entryComponents: [],
    providers: [
        StudentService,
    ],
})

export class DetailStudentModule {
}
