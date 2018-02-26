import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { StudentComponent } from './Student/student.component';
import { NotFoundComponent } from './404/404';
import { DetailStudentComponent } from './StudentDetail/detailstudent.component';
import { EditStudentComponent } from './StudentDetail/edit-student.component';
import { AddStudentComponent } from './StudentDetail/add-student.component';
import { LoginComponent } from './Login/login.component';
import { CheckLoginGuard } from './guards/check-login.guard';

const routing: Routes = [
	{ 
		path: '',
		component: HomeComponent,
		data: { title: 'Trang quản lí sinh viên' },
	},
	{ 
		path: 'student',
		component: StudentComponent,
		data: { pageTitle: 'Danh sách sinh viên' },
		// canActivate: [CheckLoginGuard]
	},
	{ 
		path: 'detail-student/:id',
		component: DetailStudentComponent,
	},
	{ 
		path: 'edit-student/:id',
		component: EditStudentComponent,
	},
	{ 
		path: 'add-student',
		component: AddStudentComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
		data: { title: 'Login' }
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
]

export const appRoutes = RouterModule.forRoot(routing);