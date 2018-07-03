import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { itemRoute } from './item.route';
import { RouterModule } from '@angular/router';
import { ConfigService } from './config.service';
import { FormsModule } from '@angular/forms';

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
        ConfigComponent,
    ],
    exports: [],
    providers: [
        ConfigService,
    ],
})
export class ExeHttpModule {}
