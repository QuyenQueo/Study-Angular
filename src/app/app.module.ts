import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


/**Import Module */
import { WebClientPageModule } from './exe-one/exe-one.module';
import { ExeFormPageModule } from './exe-form/exe-form.module';
import { ExeHttpPageModule } from './exe-httpClient/exe-httpClient.module';

/**Import Component */

import { RefOutInComponent } from './exe-three/ref-out-in/ref-out-in.component';
import { PreviewerComponent } from './exe-three/setting-color/preview.component';
import { ControlComponent } from './exe-three/setting-color/control.component';
import { HeroesComponent } from './HeroesComponent/heroes.component';
import { HomeComponent } from './Home/home.component';
import { routing } from './app.routes';
import { LoginComponent } from './Login/login.component';
import { NotFoundComponent } from './404/404';
import { CheckLoginGuard } from './guards/check-login.guard';
import { RouterModule } from '@angular/router';
import { HighlightComponent } from './exe-directive/highlight.component';

/**Import Pipe, Directive */
import { Highlight2Directive } from './exe-directive/highlight.directive';
import { HighlightDirective } from './HeroesComponent/highlight.directive';

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
        RefOutInComponent,
        Highlight2Directive,
        HighlightComponent,
        PreviewerComponent,
        ControlComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        WebClientPageModule,
        ExeFormPageModule,
        ExeHttpPageModule,
        RouterModule.forRoot(appRouter),
    ],
    providers: [
        CheckLoginGuard
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
