import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { TemplateDrivenModule } from './template-driven/item.module';

@NgModule({
    imports: [
        TemplateDrivenModule,
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ExeFormPageModule {
}
