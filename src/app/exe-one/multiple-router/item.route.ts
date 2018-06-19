import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { WidgetButtonComponent } from './widget-button.component';
import { WidgetListComponent } from './widget-list.component';
import { WidgetTypographyComponent } from './widget-typography.component';

export const itemRoute: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'widget-button',
        component: WidgetButtonComponent,
        outlet: 'widget-button',
    },
    {
        path: 'widget-list',
        component: WidgetListComponent,
        outlet: 'widget-list',
    },
    {
        path: 'widget-typography',
        component: WidgetTypographyComponent,
        outlet: 'widget-typography',
    },
];
