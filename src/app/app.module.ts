import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';

/**Import module */
import { WebClientPageModule } from './exe-one/exe-one.module';
import { ExeFormPageModule } from './exe-form/exe-form.module';

/* Import Component */
import { RefOutInComponent } from './exe-three/ref-out-in/ref-out-in.component';
import { DescriptionComponent } from './exe-pipe/description/description.component';
import { PreviewerComponent } from './exe-three/setting-color/preview.component';
import { ControlComponent } from './exe-three/setting-color/control.component';
import { HeroesComponent } from './HeroesComponent/heroes.component';
import { HomeComponent } from './Home/home.component';
import { routing } from './app.routes';
import { LoginComponent } from './Login/login.component';
import { NotFoundComponent } from './404/404';
import { CheckLoginGuard } from './guards/check-login.guard';
import { HighlightComponent } from './exe-directive/highlight.component';

/**Import Pipe, Directive */
import { CapitalizePipe } from './exe-pipe/description/capitalize.pipe';
import { HighlightDirective } from './exe-directive/highlight.directive';

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
        PreviewerComponent,
        ControlComponent,
        DescriptionComponent,
        CapitalizePipe,
        HighlightComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        WebClientPageModule,
        ExeFormPageModule,
        RouterModule.forRoot(appRouter),
    ],
    providers: [
        CheckLoginGuard
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
