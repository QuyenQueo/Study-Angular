import { Routes } from '@angular/router';

import { StudentComponent } from './student.component';

export const itemRoute: Routes = [
    {
        path: 'student',
        component: StudentComponent,
        data: { pageTitle: 'Danh sách sinh viên' },
        // canActivate: [CheckLoginGuard]
    },
];
