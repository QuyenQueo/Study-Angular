import { NgModule } from '@angular/core';
import { itemRoute } from './item.route';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { WidgetButtonComponent } from './widget-button.component';
import { WidgetListComponent } from './widget-list.component';
import { WidgetTypographyComponent } from './widget-typography.component';

import { StudentService } from '../services/student.service';

const ENTITY_STATES = [
    ...itemRoute,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ENTITY_STATES),
    ],
    declarations: [
        DashboardComponent,
        WidgetButtonComponent,
        WidgetListComponent,
        WidgetTypographyComponent,
    ],
    entryComponents: [],
    providers: [
        StudentService,
    ],
})

export class WidgetModule {
}
