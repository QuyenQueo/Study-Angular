import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ExeHttpModule } from './item.module';

@NgModule({
    imports: [
        ExeHttpModule,
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ExeHttpPageModule {
}
