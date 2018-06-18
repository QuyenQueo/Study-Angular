import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { StudentModule } from './Student/item.module';
import { DetailStudentModule } from './StudentDetail/item.module';

@NgModule({
    imports: [
        StudentModule,
        DetailStudentModule,
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class WebClientPageModule {
}
