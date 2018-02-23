import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './HeroesComponent/heroes.component';
import { HighlightDirective } from './HeroesComponent/highlight.directive';
import { StudentComponent } from './Student/student.component';
import { StudentService } from './services/student.service';
import { HomeComponent } from './Home/home.component';
import { appRoutes } from './app.routes';
import { DetailStudentComponent } from './StudentDetail/detailstudent.component';
import { LoginComponent } from './Login/login.component';
import { NotFoundComponent } from './404/404';
import { CheckLoginGuard } from './guards/check-login.guard';
import { EditStudentComponent } from './StudentDetail/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HighlightDirective,
    StudentComponent,
    HomeComponent,
    NotFoundComponent,
    DetailStudentComponent,
    LoginComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    appRoutes,
    FormsModule,
  ],
  providers: [
    StudentService,
    LoginService,
    CheckLoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
