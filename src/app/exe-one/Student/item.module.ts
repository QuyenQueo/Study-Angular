import { NgModule } from '@angular/core';
import { itemRoute } from './item.route';
import {CommonModule} from '@angular/common';

import { StudentComponent } from './student.component';
import { RouterModule } from '@angular/router';

import { StudentService } from '../services/student.service';

const ENTITY_STATES = [
    ...itemRoute,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ENTITY_STATES),
    ],
    declarations: [
        StudentComponent,
    ],
    entryComponents: [],
    providers: [
        StudentService,
    ],
})

export class StudentModule {
}
