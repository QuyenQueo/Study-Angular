import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { StudentComponent } from './Student/student.component';
import { NotFoundComponent } from './404/404';
import { DetailStudentComponent } from './StudentDetail/detailstudent.component';
import { LoginComponent } from './Login/login.component';

const routing: Routes = [
	{ 
		path: '',
		component: StudentComponent,
		data: { title: 'Trang quản lí sinh viên' },
		pathMatch: 'full',
	},
	{ 
		path: 'student',
		component: StudentComponent,
		data: { pageTitle: 'Danh sách sinh viên' },
	},
	{ 
		path: 'detail-student/:id',
		component: DetailStudentComponent,
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