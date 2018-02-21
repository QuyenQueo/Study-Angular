import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './HeroesComponent/heroes.component';
import { HighlightDirective } from './HeroesComponent/highlight.directive';
import { StudentComponent } from './Student/student.component';
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HighlightDirective,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
