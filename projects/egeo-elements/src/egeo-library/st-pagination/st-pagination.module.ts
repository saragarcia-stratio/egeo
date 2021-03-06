import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StPaginationComponent, StPaginationModule} from '../../../../egeo/src/public_api';

@NgModule({
    imports: [BrowserModule, StPaginationModule],
    entryComponents: [StPaginationComponent]
})
export class StPaginationElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StPaginationComponent, 'st-pagination');
    }
}
