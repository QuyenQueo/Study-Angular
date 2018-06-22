import { NgModule } from '@angular/core';
import { itemRoute } from './item.route';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DataDrivenComponent } from './data-driven.component';
import { RouterModule } from '@angular/router';

const ENTITY_STATES1 = [
    ...itemRoute,
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ENTITY_STATES1),
    ],
    declarations: [
        DataDrivenComponent,
    ],
    entryComponents: [],
    providers: [
    ],
})

export class DataDrivenModule {
}
