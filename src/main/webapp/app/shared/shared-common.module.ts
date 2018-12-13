import { NgModule } from '@angular/core';

import { SecuritySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SecuritySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SecuritySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SecuritySharedCommonModule {}
