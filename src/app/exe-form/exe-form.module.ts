import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { TemplateDrivenModule } from './template-driven/item.module';
import { DataDrivenModule } from './data-driven/item.module';

@NgModule({
    imports: [
        TemplateDrivenModule,
        DataDrivenModule,
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ExeFormPageModule {
}
