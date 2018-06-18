import { Routes } from '@angular/router';

import { DetailStudentComponent } from './detailStudent.component';
import { EditStudentComponent } from './edit-student.component';
import { AddStudentComponent } from './add-student.component';

export const itemRoute: Routes = [
    {
        path: 'detail-student/:id',
        component: DetailStudentComponent,
        data: { pageTitle: 'Chi tiết sinh viên' },
    },
    {
        path: 'edit-student/:id',
        component: EditStudentComponent,
    },
    {
        path: 'add-student',
        component: AddStudentComponent,
    },
];
