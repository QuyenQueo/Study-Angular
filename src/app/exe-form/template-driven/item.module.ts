import { NgModule } from '@angular/core';
import { itemRoute } from './item.route';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateDrivenComponent } from './template-driven.component';
import { RouterModule } from '@angular/router';

const ENTITY_STATES1 = [
    ...itemRoute,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ENTITY_STATES1),
    ],
    declarations: [
        TemplateDrivenComponent,
    ],
    entryComponents: [],
    providers: [
    ],
})

export class TemplateDrivenModule {
}
