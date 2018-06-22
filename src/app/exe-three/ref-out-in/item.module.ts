import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { itemRoute } from './item.route';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RefOutInComponent } from './ref-out-in.component';
import { RouterModule } from '@angular/router';

const ENTITY_STATES = [
    ...itemRoute,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ENTITY_STATES),
    ],
    declarations: [
        RefOutInComponent
    ],
    entryComponents: [],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RefOutInModule {
}
