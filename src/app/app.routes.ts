import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { NotFoundComponent } from './404/404';
import { LoginComponent } from './Login/login.component';
import { HeroesComponent } from './HeroesComponent/heroes.component';
import { CheckLoginGuard } from './guards/check-login.guard';

export const routing: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Trang quản lí sinh viên' },
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' }
    },
    {
        path: 'hero',
        component: HeroesComponent,
        data: { title: 'Heros' }
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
