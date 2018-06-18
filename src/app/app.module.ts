import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { WebClientPageModule } from './exe-one/exe-one.module';

import { HeroesComponent } from './HeroesComponent/heroes.component';
import { HighlightDirective } from './HeroesComponent/highlight.directive';
import { HomeComponent } from './Home/home.component';
import { routing } from './app.routes';
import { LoginComponent } from './Login/login.component';
import { NotFoundComponent } from './404/404';
import { CheckLoginGuard } from './guards/check-login.guard';
import { RouterModule, Route } from '@angular/router';

const appRouter = [
    ...routing,
];

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HighlightDirective,
        HomeComponent,
        NotFoundComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRouter),
        WebClientPageModule,
    ],
    providers: [
        CheckLoginGuard
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
