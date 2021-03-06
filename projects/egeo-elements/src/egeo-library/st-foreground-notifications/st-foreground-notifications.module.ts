import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StForegroundNotificationsComponent, StForegroundNotificationsModule} from '../../../../egeo/src/public_api';

@NgModule({
    imports: [BrowserModule, StForegroundNotificationsModule],
    entryComponents: [StForegroundNotificationsComponent]
})
export class StForegroundNotificationsElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StForegroundNotificationsComponent, 'st-foreground-notifications');
    }
}
